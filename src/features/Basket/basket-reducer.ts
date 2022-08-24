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
            state.products.push(action.payload.value)
            state.totalPrice = state.totalPrice += action.payload.value.price
        },
        removeProductInBasket(state, action: PayloadAction<{ value: Product }>) {
        let ind: Array<number> = []
            state.products.forEach((el,index) => {
                if(el.id === action.payload.value.id) {
                    ind.push(index)
                }
            })
            state.products.splice(ind.sort().reverse()[0],1)
            state.totalPrice = state.totalPrice -= action.payload.value.price
        },
        clearBasket(state) {
            state.products = []
            state.totalPrice = 0
        }

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


