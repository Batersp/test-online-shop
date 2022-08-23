import React from 'react';
import style from './Product.module.css';

type ProductPropsType = {
    image: string
    name: string
    description: string
    price: number
}

export const Product: React.FC<ProductPropsType> = ({price,description,name,image}) => {
    return (
        <div className={style.main}>
            <div className={style.imageContainer}>
                <img className={style.image} src={image} alt=""/>
            </div>
            <div className={style.nameProduct}>{name}</div>
            <div className={style.description}>{description}</div>
            <div className={style.buy}>
                <button>BUY</button>
                <span>{price}</span>
            </div>

        </div>
    );
};
