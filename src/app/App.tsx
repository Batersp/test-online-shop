import React, {useEffect} from 'react';
import './App.css';
import {Header} from "../features/Header/Header";
import {RoutesPage} from "../common/components/RoutesPage/RoutesPage";
import {useAppDispatch} from "../common/hooks/hooks";
import {addProductInBasket} from "../features/Basket";

function App() {

    const dispatch = useAppDispatch()


    console.log('llllll')

    useEffect(() => {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            // @ts-ignore
            if (typeof (JSON.parse(localStorage.getItem(key))) !== "number") {
                // @ts-ignore
                let kol = parseInt(localStorage.getItem(localStorage.getItem(key)))
                for(let i = 0; i < kol; i++) {
                    // @ts-ignore
                    dispatch(addProductInBasket({value: JSON.parse(localStorage.getItem(key))}))
                }

            }
        }
    }, [])

    return (
        <div className="App">
            <Header/>
            <RoutesPage/>
        </div>
    );
}

export default App;
