import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../common/hooks/hooks";
import {getProductsInBasket, getTotalAmount} from "../selectors";
import {ProductInBasket} from "./ProductInBasket/ProductInBasket";
import style from './Orders.module.css'
import {clearBasket} from "../index";
import {Button} from "@mui/material";
import {cleanLocalStorage} from "../../../common/functions/functions";


export const Orders = () => {

    const dispatch = useAppDispatch()

    const cleanBasketHandler = () => {
        cleanLocalStorage()
        dispatch(clearBasket())
    }

    const totalAmount = useAppSelector(getTotalAmount)

    const products = useAppSelector(getProductsInBasket)

    return (
        <div className={style.main}>
            {
                products.length
                    // @ts-ignore
                    ? products.map(el => <ProductInBasket key={el.id} product={el}/>)
                    : <div className={style.text}>Ваша корзина пуста</div>
            }
            {
                totalAmount
                    ?
                    <div>
                        <div
                            className={style.totalPrice}>Total: {totalAmount}$
                            <Button className={style.btn} onClick={cleanBasketHandler} variant="contained" color="error">
                                empty basket
                            </Button>
                        </div>

                    </div>

                    : null
            }


        </div>
    );
};
