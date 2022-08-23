import React from 'react';
import style from './ProductInBasket.module.css'
import {ProductType} from "../../../Products/products-reducer";
import {useAppDispatch} from "../../../../common/hooks/hooks";
import {addProductInBasket, removeProductInBasket} from "../../index";

type ProductInBasketPropsType = {
    product: ProductType
    numberOfProduct: number
}


export const ProductInBasket = (props: ProductInBasketPropsType) => {
    const {image, price, name, description} = props.product
    const dispatch = useAppDispatch()

    const onPlusClickHandler = () => {
        dispatch(addProductInBasket({value:props.product}))
    }

    const onMinusClickHandler = () => {
        dispatch(removeProductInBasket({value:props.product}))
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
                <button onClick={onMinusClickHandler}>-</button>
                {props.numberOfProduct}
                <button onClick={onPlusClickHandler}>+</button>

            </div>
        </div>
    );
};

