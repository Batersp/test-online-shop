import React from 'react';
import style from './Basket.module.css'
import {OrderForm} from "./OrderForm/OrderForm";
import {Orders} from "./Orders/Orders";
import {useAppSelector} from "../../common/hooks/hooks";
import {getTotalAmount} from "./selectors";

export const Basket = () => {
    const totalAmount = useAppSelector(getTotalAmount)



    return (
        <div className={style.main}>
        <div className={style.content}>
            <Orders/>
            <OrderForm/>

        </div>
            <span>Total: {totalAmount}$</span>
        </div>
    );
};

