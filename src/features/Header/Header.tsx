import React from 'react';
import {AppBar, Toolbar, Typography} from "@mui/material";
import basketIcon from '../../assets/images/basket.svg'

export const Header = () => {
    return (
        <AppBar color={"secondary"}  position="static">
            <Toolbar variant="dense">
                <Typography style={{margin: '0 auto'}}  variant="h2" color="inherit" component="div">
                    Products
                </Typography>
                <img src={basketIcon} alt=""/>
            </Toolbar>
        </AppBar>
    );
};
