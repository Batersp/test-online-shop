import React from 'react';
import {useAppSelector} from "../../../common/hooks/hooks";
import {getProductsInBasket} from "../selectors";
import {ProductInBasket} from "./ProductInBasket/ProductInBasket";

export const Orders = () => {

    const products = useAppSelector(getProductsInBasket)

    return (
        <div>
            {
                products.length
                    ? products.map(el => <ProductInBasket key={el.id} product={el}/>)
                    : <div>Ваша корзина пуста</div>
            }

        </div>
    );
};
