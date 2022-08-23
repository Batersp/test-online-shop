import {ProductType} from "../features/Products/products-reducer";
import {addProductInBasket, removeProductInBasket} from "../features/Basket";


export const addProduct = (product: ProductType, name: string, dispatch: any) => {
    dispatch(addProductInBasket({value: product}))
    if (localStorage.getItem(name)) {
        // @ts-ignore
        const amountProduct = parseInt(localStorage.getItem(JSON.stringify(product))) + 1
        localStorage.setItem(JSON.stringify(product), JSON.stringify(amountProduct))
    } else {
        localStorage.setItem(name, JSON.stringify(product))
        localStorage.setItem(JSON.stringify(product), JSON.stringify(1))
    }

}

export const removeProduct = (product: ProductType, name: string, dispatch: any) => {
    dispatch(removeProductInBasket({value: product}))
        // @ts-ignore
        const amountProduct = parseInt(localStorage.getItem(JSON.stringify(product))) -1
        localStorage.setItem(JSON.stringify(product), JSON.stringify(amountProduct))

}