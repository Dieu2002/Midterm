import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Header extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-sm bg-light">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <li className="active"><Link to={'/'} className="nav-link" href="#">HOME</Link></li>
                        </li>
                        <li class="nav-item">
                            <Link to={'/Contact'} className="nav-link" href="#">CONTACT</Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/About'} className="nav-link" href="#">ABOUT US</Link>
                        </li>
                        <li><Link to={'/Admin'} className="nav-link" href="#">ADMIN</Link></li>
                    </ul>
                </nav>

            </div>
        );
    }
}

