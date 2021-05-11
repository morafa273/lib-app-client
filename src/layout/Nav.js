import React from 'react';
import {Link} from 'react-router-dom'

const Nav = () =>(
        <nav class="border border-primary mt-2">
            <ul class="list-unstyled d-flex flex-row nav nav-pills">
                <li class="nav-item">
                    <Link to="/" class="nav-link">Books</Link>
                </li>
                <li class="nav-item">
                    <Link to="/users" class="nav-link">Users</Link>
                </li>
                <li class="nav-item">
                    <Link to="/transaksi" class="nav-link">Transaction</Link>
                </li>
            </ul>
        </nav>
        
);

export default Nav;