# Product Card

### About:

paquete de pruebas

####IMPORT
```
import {} from 'wavp-pcard'
```


####USE
```
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
```