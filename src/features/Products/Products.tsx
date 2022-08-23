import React from 'react';
import {getProducts} from "./selectors";
import {useAppSelector} from "../../common/hooks/hooks";
import {Product} from "../Product/Product";
import style from './Products.module.css'


export const Products = () => {

    const Products = useAppSelector(getProducts)

    return (
        <div className={style.main}>
            {Products.map(el => <Product key={el.id} product={el}/>)}


        </div>
    );
};
