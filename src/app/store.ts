import thunkMiddleware from 'redux-thunk'

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {productsReducer} from "../features/Products";
import {basketReducer} from "../features/Basket";


export const rootReducer = combineReducers({
    products: productsReducer,
    basket: basketReducer
})
// непосредственно создаём store
//export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store
