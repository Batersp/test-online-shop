import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../common/hooks/hooks";
import {getProductsInBasket, getTotalAmount} from "../selectors";
import {ProductInBasket} from "./ProductInBasket/ProductInBasket";
import style from './Orders.module.css'
import {clearBasket} from "../index";
import {Button} from "@mui/material";


export const Orders = () => {

    const dispatch = useAppDispatch()

    const cleanBasketHandler = () => {
        dispatch(clearBasket())
    }

    const totalAmount = useAppSelector(getTotalAmount)

    const products = useAppSelector(getProductsInBasket)
    let obj = {}
    for (let i = 0; i < products.length; i++) {
        // @ts-ignore
        if (obj[JSON.stringify(products[i])]) {
            // @ts-ignore
            obj[JSON.stringify(products[i])] += 1
        } else {
            // @ts-ignore
            obj[JSON.stringify(products[i])] = 1
        }
    }

    let productsForBasket = Object.keys(obj).map(el => JSON.parse(el))


    return (
        <div className={style.main}>
            {
                products.length
                    // @ts-ignore
                    ? productsForBasket.map(el => <ProductInBasket numberOfProduct={obj[JSON.stringify(el)]} key={el.id}
                                                                   product={el}/>)
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
