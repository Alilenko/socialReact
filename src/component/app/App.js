import React, {Component} from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';

import './App.css';


export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            data : [
                {id: 1, lebel: "Going to learn React", important: false, like: false},
                {id: 2, lebel: "That is good", important: false, like: false},
                {id: 3, lebel: "I am delighted!!!", important: false, like: false}
            ],
            term: '',
            filter: 'all'
        };

        this.maxId = 4
    }
    
    componentDidMount() {
        const localData =JSON.parse(localStorage.getItem('data'))
        if (localData) {
            (this.setState({data: localData}));
        }
        
    }
    componentDidUpdate() {
        localStorage.setItem('data', JSON.stringify(this.state.data));
    }

   deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: newArr
            }
        })
    }

    addItem = (body) => {
        const newItem = {
            lebel: body,
            important: false,
            id: Math.random()
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }
    

    onToggleLike = (id) => {
        this.setState(({data}) => {
            console.log(id);
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, like: !old.like} ;
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return{
                data: newArr
            }
        })
    }
    onToggleImportant = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, important: !old.important} ;
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return{
                data: newArr
            }
        })
    }
    searchPost = (items, term) => {
        if(term.length === 0){
            return items;
        }
        return items.filter((item) => {
            return item.lebel.toLowerCase().indexOf(term) > -1
        });
    }
    onUpdateSearch = (term) => {
    this.setState({term})
    }
    filterPost = (items, filter) => {
        if(filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }
    onFilterSelect = (filter) => {
        this.setState({filter})
    }

 render() {
     const {data, term, filter} = this.state;
     const liked = data.filter(item => item.like).length
     const allPosts = data.length;

     const visiblePosts = this.filterPost(this.searchPost(data, term), filter)

     return(
        <div className="app">
        <AppHeader 
        liked={liked}
        allPosts={allPosts}
        />
        <div className="search-panel d-flex">
            <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
            <PostStatusFilter 
            filter={filter}
            onFilterSelect={this.onFilterSelect}/>
        </div>
        <PostList 
        data={visiblePosts} 
        onDelete={this.deleteItem} 
        onToggleLike={this.onToggleLike}
        onToggleImportant={this.onToggleImportant}
        />
        <PostAddForm onAdd={this.addItem}/>
   </div>
     )
 }
}

