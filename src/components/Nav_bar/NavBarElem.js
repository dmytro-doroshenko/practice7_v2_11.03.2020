import React from 'react';
import './Nav_bar.css';

function NavBarElem({post, activeID, read}) {


    const onClickHandler = (id, e) => {
        activeID(id);
    };

    const onDoubleClickHandler = (id) => {
        read(id)
    };

    return(
            <a href='#' className='list_item' key={post.id} title={post.title} onDoubleClick={onDoubleClickHandler.bind(this, post.id)} onClick={onClickHandler.bind(this, post.id)} >{post.isRead ? '' : <span className='red'>Unread</span>} {post.id}. {post.title}</a>
        )
}

export default NavBarElem;