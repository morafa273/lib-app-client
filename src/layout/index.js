import React from 'react';
import Nav from './Nav';

const Layout = (props) => (
    <div class="container">
        {props.children}
    </div>
)


export { Layout,Nav };