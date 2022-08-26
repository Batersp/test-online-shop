import {ProductType} from "../../features/Products/products-reducer";
import {addProductInBasket, removeProductInBasket} from "../../features/Basket";


export const addProduct = (product: ProductType, name: string, dispatch: any) => {
    dispatch(addProductInBasket({value: product}))
    if (localStorage.getItem(name)) {
        // @ts-ignore
        localStorage.setItem(name, JSON.stringify({...product, count: product.count + 1}))
    } else {
        localStorage.setItem(name, JSON.stringify(product))
    }

}

export const removeProduct = (product: ProductType, name: string, dispatch: any) => {
    dispatch(removeProductInBasket({value: product}))
    // @ts-ignore
    const element = JSON.parse(localStorage.getItem(name))
    if (element.count === 1) {
        localStorage.removeItem(name)
    } else {
        localStorage.setItem(name, JSON.stringify({...product, count: product.count - 1}))
    }
}

export const cleanLocalStorage = () => {
    localStorage.clear()
}