import React from 'react';
import {ProductTitle, ProductCard} from "../../src";
import render from "react-test-renderer";
import { product2} from "../data/products";

describe('ProductTitle', () => {
    test('mostrar componente', () => {
        const wrapper = render.create(
            <ProductTitle title="Product Title" />
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
    
    test('mostrar componente con nombre de producto', () => {
        const wrapper = render.create(
            <ProductCard product={product2} >
                { () => (
                    <ProductTitle/>
                )}
            </ProductCard>
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});
