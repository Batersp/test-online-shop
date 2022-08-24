import React from 'react';
import style from './Basket.module.css'
import {OrderForm} from "./OrderForm/OrderForm";
import {Orders} from "./Orders/Orders";

export const Basket = () => {


    return (
        <div className={style.main}>
            <div className={style.content}>
                <Orders/>
                <OrderForm/>
            </div>
        </div>
    );
};

