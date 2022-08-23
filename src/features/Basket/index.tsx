import {slice} from "./basket-reducer";

const basketReducer = slice.reducer
const {addProductInBasket} = slice.actions

export {
    basketReducer,
    addProductInBasket
}