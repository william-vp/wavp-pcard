import React from 'react';
import {ProductImage, ProductCard} from "../../src";
import render from "react-test-renderer";
import { product2} from "../data/products";

describe('ProductImage', () => {
    test('mostrar componente', () => {
        const wrapper = render.create(
            <ProductImage img={'ruta'} />
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('mostrar componente con imagen de producto', () => {
        const wrapper = render.create(
            <ProductCard product={product2} >
                { () => (
                    <ProductImage/>
                )}
            </ProductCard>
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});
