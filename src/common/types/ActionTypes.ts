import {createNewProduct} from "../../features/Products";
import {addProductInBasket} from "../../features/Basket";

export type AppActionsType =
    ReturnType<typeof createNewProduct>
    | ReturnType<typeof addProductInBasket>
