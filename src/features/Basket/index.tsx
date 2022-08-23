import {slice} from "./basket-reducer";

const basketReducer = slice.reducer
const {addProductInBasket, removeProductInBasket} = slice.actions

export {
    basketReducer,
    addProductInBasket,
    removeProductInBasket
}