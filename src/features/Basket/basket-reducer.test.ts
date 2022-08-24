import {InitialStateType} from "./basket-reducer";
import {addProductInBasket, basketReducer, clearBasket, removeProductInBasket} from "./index";

let startState: InitialStateType = {
    products: [],
    totalPrice: 0
}
beforeEach(() => {
startState = {
    products: [
        {id: 1, description: 'very cool ball', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqsOPcX7l7HZ0oSxzGgkqILtep2HoPccJ4qA&usqp=CAU', name: 'soccer ball', price: 20},
        {id: 2, description: 'gamin langtop', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE26ECRGgWEeD5FSfYRB5a0gvkLvwuUAk0xQ&usqp=CAU', name: 'Laptop', price: 1250},
        {id: 3, description: 'great sneakers for every day', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm-4g6E15hwrynaOUjKK4r0WrOeE6fsOY4ag&usqp=CAU', name: 'Sneaker', price: 150},
        {id: 4, description: 'great quality and sound at a low price', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLqHg-nFw-yjczGubyfcb_1XpAfoLKHXhwzQ&usqp=CAU', name: 'loudspeakers', price: 90},
    ],
    totalPrice: 1510
}
})

test('product must be added', () => {
    let product = {id: 5, description: 'best thing to eat on a hot day', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY-Z6pXtMpJUX5fLv2eiouJgkEmTwVrMWj-Q&usqp=CAU', name: 'ice cream', price: 3}

    const action = addProductInBasket({value: product})

    const endState = basketReducer(startState, action)

    expect(endState.products.length).toBe(5)
    expect(endState.totalPrice).toBe(1513)
    expect(endState.products[4].id).toBe(5)

})

test('the product must be removed', () => {
    let product = {id: 2, description: 'gamin langtop', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE26ECRGgWEeD5FSfYRB5a0gvkLvwuUAk0xQ&usqp=CAU', name: 'Laptop', price: 1250}

    const action = removeProductInBasket({value: product})

    const endState = basketReducer(startState, action)

    expect(endState.products.length).toBe(3)
    expect(endState.totalPrice).toBe(260)
    expect(endState.products[1].id).toBe(3)

})


test('the basket must be completely emptied', () => {

    const action = clearBasket()

    const endState = basketReducer(startState, action)

    expect(endState.products.length).toBe(0)
    expect(endState.totalPrice).toBe(0)
    expect(endState).toEqual({
        products: [],
        totalPrice: 0
    })

})