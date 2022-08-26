import {InitialStateType} from "./products-reducer";
import {createNewProduct, productsReducer} from "./index";


let startState: InitialStateType = {
    products: []
}
beforeEach(() => {
    startState = {
        products: [
            {id: 1, count: 1, description: 'very cool ball', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqsOPcX7l7HZ0oSxzGgkqILtep2HoPccJ4qA&usqp=CAU', name: 'soccer ball', price: 20},
        ]

    }
})

test('product must be added in shop', () => {
    let product = {id: 5, count: 1, description: 'best thing to eat on a hot day', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY-Z6pXtMpJUX5fLv2eiouJgkEmTwVrMWj-Q&usqp=CAU', name: 'ice cream', price: 3}

    const action = createNewProduct({value: product})

    const endState = productsReducer(startState, action)

    expect(endState.products.length).toBe(2)
    expect(endState.products[0].id).toBe(5)
})

