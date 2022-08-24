import React from 'react';
import style from './ProductInBasket.module.css'
import {ProductType} from "../../../Products/products-reducer";
import {useAppDispatch} from "../../../../common/hooks/hooks";
import {addProduct, removeProduct} from "../../../../common/functions/functions";
import {Button} from "@mui/material";

type ProductInBasketPropsType = {
    product: ProductType
    numberOfProduct: number
}


export const ProductInBasket = (props: ProductInBasketPropsType) => {
    const {image, price, name, description} = props.product
    const dispatch = useAppDispatch()

    const onPlusClickHandler = () => {
        addProduct(props.product, name, dispatch)
    }

    const onMinusClickHandler = () => {
        removeProduct(props.product, name, dispatch)
    }

    return (
        <div className={style.main}>
            <div className={style.info}>
                <div className={style.imageContainer}>
                    <img className={style.image} src={image} alt=""/>
                </div>
                <div className={style.aboutProduct}>
                    <div className={style.nameProduct}>{name}</div>
                    <div className={style.description}>{description}</div>
                    <span className={style.price}>цена {price}$</span>
                </div>
            </div>
            <div className={style.numberOfGoods}>
                <Button className={style.btn} onClick={onMinusClickHandler} variant="contained" color="error">
                    -
                </Button>
                {props.numberOfProduct}
                <Button className={style.btn} onClick={onPlusClickHandler} variant="contained" color="success">
                    +
                </Button>


            </div>
        </div>
    );
};

