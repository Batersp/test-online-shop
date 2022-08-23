import {createNewProduct} from "../../features/Products";
import {addProductInBasket, removeProductInBasket} from "../../features/Basket";

export type AppActionsType =
    ReturnType<typeof createNewProduct>
    | ReturnType<typeof addProductInBasket>
    | ReturnType<typeof removeProductInBasket>
