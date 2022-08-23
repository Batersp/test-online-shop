import {AppRootStateType} from "../../app/AppRootStateTypes";

export const getProductsInBasket = (state: AppRootStateType) => state.basket.products
export const getTotalAmount = (state: AppRootStateType) => state.basket.totalAmount