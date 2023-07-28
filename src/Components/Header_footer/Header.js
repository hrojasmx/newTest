import React, { Component } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor:'#98c5e9',
                    boxShadow: 'none',
                    padding:'10px 0',
                    borderBottom: '2px solid #00285e'
                }}
            >
                <Toolbar style={{ display: 'flex' }}>
                    <Link to="/">
                        <Button color="inherit">Home</Button>
                    </Link>

                    <Link to="/about">
                        <Button color="inherit">About</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;
