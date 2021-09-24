import React, { Component } from 'react';

import './post-status-filter.css'

export default class PostStatusFilter extends Component {
    constructor(props){
        super(props)
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось'}
        ]
    }

    render() {
        const button = this.buttons.map(({name, label}) => {
            const active = this.props.filter === name;
            const clazz = active ? 'btn-info' : 'btn-outline-secondary'
            return(
                <button 
                key={name} 
                type="button" 
                onClick={() => this.props.onFilterSelect(name)}
                className={`btn ${clazz}`}>{label}</button>
            )
        })
        return (
            <div className="btn-group">
                {button}
            </div>
        )
    }

}

