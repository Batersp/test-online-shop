import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProductType} from "../Products/products-reducer";


const initialState: InitialStateType = {
    products: [],
    totalPrice: 0
}


export const slice = createSlice({
    name: 'basket',
    initialState: initialState,
    reducers: {
        addProductInBasket(state, action: PayloadAction<{ value: ProductType }>) {
            if (state.products.findIndex(el => el.id === action.payload.value.id) === -1) {
                state.products.push(action.payload.value)
                let summa = 0
                state.products.forEach(el => {
                    summa += el.price * el.count
                })
                state.totalPrice = summa
            } else {
                state.products.map(el => el.id === action.payload.value.id ? el.count += 1 : el)
                state.totalPrice += action.payload.value.price
            }
        },
        removeProductInBasket(state, action: PayloadAction<{ value: ProductType }>) {
           const i = state.products.findIndex(el => el.id === action.payload.value.id)
            if(state.products[i].count === 1) {
                state.products.splice(i, 1)
            } else {
                state.products[i].count -= 1
            }
            state.totalPrice -= action.payload.value.price
        },
        clearBasket(state) {
            state.products = []
            state.totalPrice = 0
        }

    },
})


export type InitialStateType = {
    products: Array<ProductType>
    totalPrice: number
}




