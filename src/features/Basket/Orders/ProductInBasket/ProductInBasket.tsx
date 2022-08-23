import React from 'react';
import style from './ProductInBasket.module.css'
import {ProductType} from "../../../Products/products-reducer";
import {useAppSelector} from "../../../../common/hooks/hooks";
import {getTotalAmount} from "../../selectors";

type ProductInBasketPropsType = {
    product: ProductType
}


export const ProductInBasket = (props: ProductInBasketPropsType) => {
    const {image, price, name, description} = props.product


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
                <button>-</button>
                число
                <button>+</button>

            </div>
        </div>
    );
};

