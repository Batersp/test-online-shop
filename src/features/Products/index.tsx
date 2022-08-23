import {slice} from "./products-reducer";

const productsReducer = slice.reducer
const {createNewProduct} = slice.actions

export {
    productsReducer,
    createNewProduct
}