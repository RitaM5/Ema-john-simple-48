import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
     const [products, setProducts] = useState([]);

     //for cart-container
      const [cart , setCart] = useState([]);

     useEffect(() => {
         fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
         .then(res => res.json())
         .then(data => setProducts(data))
     }, [])
    

   /*   useEffect(() =>{
         const storedCart = getStoredCart();
         const savedCart = [];
         //console.log(storedCart);
         for(const id in storedCart){
             const addedProduct = products.find(product => product.id === id)

            // console.log(addedProduct);
           if(addedProduct){
               //console.log(addedProduct);
               const quantity = storedCart[id];
               addedProduct.quantity = quantity;
               savedCart.push(addedProduct);
           }

         }
         setCart(savedCart);

     }, [products]); */


     const handleAddToCart = (product) => {
         //console.log('clicked', product);
         const newCart = [...cart, product];
         setCart(newCart);

         //for sent data to local storage
         addToDb(product.id);

     }


    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Product 
                        product={product} 
                        key={product.id} handleAddToCart={handleAddToCart}>            
                        </Product>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;

