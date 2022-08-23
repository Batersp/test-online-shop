import React from 'react';
import style from './Product.module.css'

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
                <img className={style.image} src="" alt=""/>
            </div>
            <div className={style.nameProduct}>Name Product</div>
            <div className={style.description}>Description Product</div>
            <div className={style.buy}>
                <button>BUY</button>
                <span>Price</span>
            </div>

        </div>
    );
};
