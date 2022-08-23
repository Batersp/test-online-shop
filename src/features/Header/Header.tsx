import React from 'react';
import {AppBar, Toolbar, Typography} from "@mui/material";
import basketIcon from '../../assets/images/basket.svg'
import {NavLink} from "react-router-dom";
import {path} from "../../common/enums/path";
import {useAppSelector} from "../../common/hooks/hooks";
import {getTotalAmount} from "../Basket/selectors";
import style from './Header.module.css'

export const Header = () => {
    const totalPrice = useAppSelector(getTotalAmount)

    return (
        <div className={style.main}>
            <AppBar color={"secondary"} position="static">
                <Toolbar variant="dense">
                    <Typography style={{margin: '0 auto'}} variant="h2" color="inherit" component="div">
                        Products
                    </Typography>
                    <NavLink to={path.PRODUCTS}>
                       <div>main</div>
                    </NavLink>
                    <NavLink to={path.BASKET}>
                        <div className={style.basket}>
                            <img src={basketIcon} alt=""/>
                            {totalPrice
                                ? <div className={style.price}>{totalPrice}$</div>
                                : null
                            }

                        </div>
                    </NavLink>
                </Toolbar>
            </AppBar>
        </div>
    );
};
