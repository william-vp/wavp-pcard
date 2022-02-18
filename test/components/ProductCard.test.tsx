import React from 'react';
import {ProductCard} from "../../src";
import render from "react-test-renderer";
import {product1, product2} from "../data/products";

const {act}= render

describe('ProductCard', () => {
    test('mostrar componente', () => {
        const wrapper = render.create(
            <ProductCard product={product1}>
                { () => (
                    <h1>Product 1</h1>
                )}
            </ProductCard>
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
    
    test('contador', () => {
        const wrapper = render.create(
            <ProductCard product={product2} >
                { ({count, increment}) => (
                    <>
                        <span>{count}</span>
                        <button onClick={() => increment(1)}>+1</button>
                    </>
                )}
            </ProductCard>
        );
        let tree= wrapper.toJSON();
        console.log((tree as any).children[1]);
        expect(tree).toMatchSnapshot();
        
        act(() => {
            (tree as any).children[1].props.onClick();
        });
        
        
        tree= wrapper.toJSON();
        console.log((tree as any).children[0]);
        expect((tree as any).children[0].children[0]).toMatchSnapshot();
        
    });
    
    
});
