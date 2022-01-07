import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import "./css/queryBox.css";


function queryBox() {
    return (
        <div className='queryBox'>
            <div className='queryBox__info'>
                <Avatar/>
            </div>
            <div className='queryBox__query'>
                <p>Put your query or Link</p>
            </div>
        </div>
    )
}

export default queryBox
