import React, {createContext} from "react";
import styles from '../styles/styles.module.css'
import {useProduct} from "../hooks/useProduct";
import {ProductContextProps, ProductCardProps} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;

export const ProductCard = ({children, product, className = '', style, onChange, value, initialValues}: ProductCardProps) => {
    const {counter, increment, maxCount, reset, isMaxCountReached} = useProduct({product, onChange, value, initialValues});
    return (
        <Provider value={{counter, increment, product, maxCount}}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children({count: counter, increment, product, isMaxCountReached, maxCount, reset})}
            </div>
        </Provider>
    )
}
