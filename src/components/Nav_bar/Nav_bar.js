import React from 'react';
import './Nav_bar.css';
import NavBarElem from "./NavBarElem";

function NavBar ({list, change, readTrue}) {

    const setActive = (id) => {
        change(id);
    };

    const setRead = (id) => {
        readTrue(id)
    }

    return (
        <div className='navigation'>
            {list
                ? list.map(item => <NavBarElem key={item.id} post={item} activeID={setActive} read={setRead}/>)
                : 'Loading...'
            }
        </div>
    );

}

export default NavBar;