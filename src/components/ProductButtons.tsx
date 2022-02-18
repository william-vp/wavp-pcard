import React, {CSSProperties, useContext} from "react";
import styles from "../styles/styles.module.css";
import {ProductContext} from "./ProductCard";
import {useProduct} from "../hooks/useProduct";

export interface ButtonProps {
    className?: string;
    activeClass?: string;
    style?: CSSProperties
}

export const ProductButtons = ({className, activeClass, style}: ButtonProps) => {
    const {counter, increment, product} = useContext(ProductContext)

    const {isMaxCountReached} = useProduct({product})

    return (
        <div className={`${styles.buttonsContainer} ${className} ${activeClass}`} style={style}>
            <button onClick={() => increment(-1)} className={styles.buttonMinus}>-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button onClick={() => increment(1)}
                    className={`${styles.buttonAdd} ${isMaxCountReached && styles.disabled}`}>+
            </button>
        </div>
    )
}