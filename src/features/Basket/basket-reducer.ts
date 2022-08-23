import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: InitialStateType = {
    products: [],
    totalPrice: 0
}


export const slice = createSlice({
    name: 'basket',
    initialState: initialState,
    reducers: {
        addProductInBasket(state, action: PayloadAction<{ value: Product }>) {
            state.products.unshift(action.payload.value)
            state.totalPrice = state.totalPrice += action.payload.value.price
        },
        removeProductInBasket(state, action: PayloadAction<{ value: Product }>) {
            const index = state.products.findIndex(el => el.id === action.payload.value.id)
            state.products.splice(index,1)
            state.totalPrice = state.totalPrice -= action.payload.value.price
        },
    },
})



export type InitialStateType = {
    products: Array<Product>
    totalPrice: number
}

type Product = {
    id: number
    name: string
    description: string
    price: number
    image: string
}


