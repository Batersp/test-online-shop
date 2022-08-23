import React from 'react';
import './App.css';
import {Header} from "../features/Header/Header";
import {Products} from "../features/Products/Products";

function App() {
    return (
        <div className="App">
            <Header/>
            <Products/>
        </div>
    );
}

export default App;
