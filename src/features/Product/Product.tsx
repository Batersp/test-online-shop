import React, {useState} from 'react';
import style from './Product.module.css';
import {useAppDispatch} from "../../common/hooks/hooks";
import {ProductType} from "../Products/products-reducer";
import {addProduct} from "../../common/functions/functions";
import {Button} from "@mui/material";

type ProductPropsType = {
    product: ProductType
}

export const Product = (props: ProductPropsType) => {

    const {image, price, name, description} = props.product
    const [inBasket, setInBasket] = useState<boolean>(false)

    const dispatch = useAppDispatch()

    const onClickHandler = () => {
        addProduct(props.product, name, dispatch)
        setInBasket(true)
    }


    return (
        <div className={style.main}>
            <div className={style.imageContainer}>
                <img className={style.image} src={image} alt=""/>
            </div>
            <div className={style.nameProduct}>{name}</div>
            <div className={style.description}>{description}</div>
            <div className={style.buy}>
                <Button style={{fontSize: '25px'}} className={style.btn} fullWidth onClick={onClickHandler}
                        variant="contained" color={inBasket? 'secondary' : "success"}>
                    {
                        inBasket
                            ? <div>in the basket</div>
                            : <div>BUY {price}$</div>
                    }

                </Button>
            </div>

        </div>
    );
};
