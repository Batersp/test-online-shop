import React from 'react';
import style from './Product.module.css';
import {useAppDispatch} from "../../common/hooks/hooks";
import {addProductInBasket} from "../Basket";
import {ProductType} from "../Products/products-reducer";

type ProductPropsType = {
    product: ProductType
}

export const Product = (props: ProductPropsType) => {

    const {image, price, name, description} = props.product

    const dispatch = useAppDispatch()

    const onClickHandler = () => {
        dispatch(addProductInBasket({value: props.product}))
        if (localStorage.getItem(name)) {
            // @ts-ignore
            const a = parseInt(localStorage.getItem(JSON.stringify(props.product))) + 1
            localStorage.setItem(JSON.stringify(props.product), JSON.stringify(a))
        } else {
            localStorage.setItem(name, JSON.stringify(props.product))
            localStorage.setItem(JSON.stringify(props.product), JSON.stringify(1))
        }

    }

    return (
        <div className={style.main}>
            <div className={style.imageContainer}>
                <img className={style.image} src={image} alt=""/>
            </div>
            <div className={style.nameProduct}>{name}</div>
            <div className={style.description}>{description}</div>
            <div className={style.buy}>
                <button onClick={onClickHandler}>BUY</button>
                <span>{price}</span>
            </div>

        </div>
    );
};
