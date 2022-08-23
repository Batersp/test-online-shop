import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: InitialStateType = {
    products: [
        {description: 'very cool ball', image: 'https://soccershop.by/image/cache/catalog/Balls/adidas/adidas_ucl_leagur_5_1-252x252.PNG', name: 'soccer ball', price: 20},
        {description: 'gamin langtop', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE26ECRGgWEeD5FSfYRB5a0gvkLvwuUAk0xQ&usqp=CAU', name: 'Laptop', price: 1250},
        {description: 'great sneakers for every day', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm-4g6E15hwrynaOUjKK4r0WrOeE6fsOY4ag&usqp=CAU', name: 'Sneaker', price: 150},
        {description: 'great quality and sound at a low price', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLqHg-nFw-yjczGubyfcb_1XpAfoLKHXhwzQ&usqp=CAU', name: 'loudspeakers', price: 90},
        {description: 'best thing to eat on a hot day', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY-Z6pXtMpJUX5fLv2eiouJgkEmTwVrMWj-Q&usqp=CAU', name: 'ice cream', price: 3},
    ]
}


export const slice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        createNewProduct(state, action: PayloadAction<{ value: Product }>) {
            state.products.push(action.payload.value)
        }
    },
})



export type InitialStateType = {
   products: Array<Product>
}

type Product = {
    name: string
    description: string
    price: number
    image: string
}


