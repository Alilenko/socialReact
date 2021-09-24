
import React, {Component} from 'react';


import './post-list-item.css';

export default class PostListItem extends Component {


render() {
    const {lebel, onDelete, important, like, onToggleLike, onToggleImportant} = this.props;


    let classes = 'app-list-item d-flex justify-content-between';
    if (important){
        classes += ' important'
    }
    if (like){
        classes += ' like'
    }

        return(
            <div className={classes}>
            <span className="app-list-item-label" onClick={onToggleLike}>
                {lebel}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button onClick={onToggleImportant} className="btn-star btn-sm">
                    <i className="fa fa-star"></i>
                </button>
                <button onClick={onDelete} className="btn-trash btn-sm">
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </div>
        )
    }
}


