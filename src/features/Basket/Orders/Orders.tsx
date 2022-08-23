import React from 'react';
import {useAppSelector} from "../../../common/hooks/hooks";
import {getProductsInBasket} from "../selectors";
import {ProductInBasket} from "./ProductInBasket/ProductInBasket";




export const Orders = () => {

    const products = useAppSelector(getProductsInBasket)
    let obj = {}
    for(let i = 0; i < products.length; i++) {
        // @ts-ignore
        if(obj[JSON.stringify(products[i])]) {
            // @ts-ignore
            obj[JSON.stringify(products[i])] +=1
        } else {
            // @ts-ignore
            obj[JSON.stringify(products[i])] = 1
        }
    }

    let productsForBasket = Object.keys(obj).map(el => JSON.parse(el))



    return (
        <div>
            {
                products.length
                    // @ts-ignore
                    ? productsForBasket.map(el => <ProductInBasket numberOfProduct={obj[JSON.stringify(el)]} key={el.id} product={el}/>)
                    : <div>Ваша корзина пуста</div>
            }

        </div>
    );
};
