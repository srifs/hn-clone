import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = ({search}) => {
    return (
        <React.Fragment>
            <h1>News Clone</h1>
            <div className="nav-link">
                <NavLink to="/top" activeClassName="active">
                    Top
                </NavLink>
                <NavLink to="/ask" activeClassName="active">
                    Ask
                </NavLink>
                <NavLink to="/show" activeClassName="active">
                    Show
                </NavLink>
                <NavLink to="/job" activeClassName="active">
                    Jobs
                </NavLink>
                <div id='search'>
                    <input placeholder="search" onChange={(e) => {
                        search(e.target.value);
                    }}/>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Header;
