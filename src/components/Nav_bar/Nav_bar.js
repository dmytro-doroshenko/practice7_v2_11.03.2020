import React, {Fragment, useState} from 'react';
import './Nav_bar.css';
import NavBarElem from "./NavBarElem";

function NavBar ({list, change, readTrue}) {

    const [leftBorder, setLeftBorder] = useState(0);
    const [rightBorder, setRightBorder] = useState(12);

    const setActive = (id) => {
        change(id);
    };

    const setRead = (id) => {
        readTrue(id)
    };

    const prev = () => {
        setLeftBorder( leftBorder => leftBorder - 12);
        setRightBorder( leftBorder);
    };

    const next = () => {
        setLeftBorder( rightBorder );
        setRightBorder( rightBorder => rightBorder + 12);
    };

    const more = () => {
        setRightBorder(rightBorder => rightBorder + 12)
    };

    return (
        <div className='navigation'>
            {list
                ? list.map((item, index) => {
                        return (
                            <NavBarElem
                                key={item.id}
                                post={item}
                                ind={index}
                                start={leftBorder}
                                end={rightBorder}
                                activeID={setActive}
                                read={setRead}
                            />
                        )
                    })
                : 'Loading...'
            }
            <div>
                <p className='p-10px text-grey text-center'>Shown {leftBorder + 1} to {rightBorder < list.length ? rightBorder : list.length} of {list.length}</p>
                <div className='d-flex space-around p-10px'>
                    {leftBorder > 0 && <button className='btn' onClick={prev}>Prev. 12</button>}
                    {rightBorder <= list.length &&
                        <Fragment>
                            <button className='btn' onClick={more} >More {list.length - rightBorder < 12 ? list.length - rightBorder : '12'}</button>
                            <button className='btn' onClick={next}>Next {list.length - rightBorder < 12 ? list.length - rightBorder : '12'}</button>
                        </Fragment>
                    }
                </div>
            </div>

        </div>
    );

}

export default NavBar;