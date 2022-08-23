import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: InitialStateType = {
    products: [],
    totalAmount: 0
}


export const slice = createSlice({
    name: 'basket',
    initialState: initialState,
    reducers: {
        addProductInBasket(state, action: PayloadAction<{ value: Product }>) {
            state.products.unshift(action.payload.value)
            state.totalAmount = state.totalAmount += action.payload.value.price
        },
    },
})



export type InitialStateType = {
    products: Array<Product>
    totalAmount: number
}

type Product = {
    id: number
    name: string
    description: string
    price: number
    image: string
}


