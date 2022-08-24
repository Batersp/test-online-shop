import {slice} from "./basket-reducer";

const basketReducer = slice.reducer
const {addProductInBasket, removeProductInBasket, clearBasket} = slice.actions

export {
    basketReducer,
    addProductInBasket,
    removeProductInBasket,
    clearBasket
}