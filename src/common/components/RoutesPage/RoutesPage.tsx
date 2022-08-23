import React from 'react';
import {path} from "../../enums/path";
import {Products} from "../../../features/Products/Products";
import {Basket} from "../../../features/Basket/Basket";
import {Navigate, Route, Routes} from 'react-router-dom';


export const RoutesPage = () => {

    const routes = [
        { path: path.PRODUCTS, component: <Products /> },
        { path: path.BASKET, component: <Basket /> }
    ];

    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to={path.PRODUCTS} />} />
                {routes.map(route => (
                    <Route path={route.path} element={route.component} key={route.path} />
                ))}
            </Routes>
        </div>
    );
};
