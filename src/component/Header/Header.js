import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Header extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-sm ">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <li className="active"><Link to={'/'} className="nav-link" >HOME</Link></li>
                        </li>
                        <li class="nav-item">
                            <Link to={'/Contact'} className="nav-link" >CONTACT</Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/About'} className="nav-link" >ABOUT US</Link>
                        </li>
                        <li><Link to={'/Admin'} className="nav-link">ADMIN</Link></li>
                    </ul>
                </nav>

            </div>
        );
    }
}

