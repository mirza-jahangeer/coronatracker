import React from 'react'
import {Typography, AppBar, Toolbar} from '@material-ui/core';
import CopyrightIcon from '@material-ui/icons/Copyright';

export const Footer = () => {
    return (
        <div>
            <AppBar>
    <Toolbar><Typography variant="caption" color="textPrimary"><CopyrightIcon/> {" "} Copyright Reserverd.</Typography></Toolbar>
            </AppBar>
        </div>
    )
}
