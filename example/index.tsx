import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ProductCard, ProductImage, ProductButtons, ProductTitle} from '../.';

const product = {
    id: '1',
    title: 'Coffe Mug',
    //img: coffeMug
}

const App = () => {
    return (
        <div>
            <ProductCard product={product}
                         key={product.id}
                         initialValues={{
                             count: 4,
                             maxCount: 10
                         }}>
                {({reset, increment, count, isMaxCountReached}) => (<>
                    <ProductImage/>
                    <ProductTitle/>
                    <ProductButtons/>

                    <button onClick={reset}>Reset</button>
                    <button onClick={() => increment(-2)}>- 2</button>
                    {!isMaxCountReached && <button onClick={() => increment(2)}>+ 2</button>}
                    <span className='text-white'> {count}</span>
                </>)}
            </ProductCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
