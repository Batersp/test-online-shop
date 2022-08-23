import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: InitialStateType = {
    products: []
}


export const slice = createSlice({
    name: 'basket',
    initialState: initialState,
    reducers: {
        addProductInBasket(state, action: PayloadAction<{ value: Product }>) {
            state.products.push(action.payload.value)
        }
    },
})



export type InitialStateType = {
    products: Array<Product>
}

type Product = {
    id: number
    name: string
    description: string
    price: number
    image: string
}


