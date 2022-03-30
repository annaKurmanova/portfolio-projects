import React from 'react';
import Project from './Project'

function NavSide() {
    return (
        <div className="navside-wrap">
            <div className="navside-inner-left">
                <ul>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                </ul>
            </div>
            <div className="navside-inner-right">
                <Project />
            </div>
        </div>
    )
}

export default NavSide