import React from 'react';
import _ from 'lodash';

import { Link } from 'react-router'

export default class Header extends React.Component {
    render() {
        return (
            <nav class="nav navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">Image Gallery</a>
                    </div>
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav navbar-right">
                            <li><Link to="/home">Home</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}