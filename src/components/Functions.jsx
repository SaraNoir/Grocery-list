import React, { useState, useEffect } from 'react';
import { GroceryList } from './GroceryList';
import { v4 as uuidv4 } from 'uuid';

function Functions() {
    const [products, setProducts] = useState(() => {
      const storedProducts = localStorage.getItem('products');
      if (storedProducts) {
        return JSON.parse(storedProducts);
      } else {
        return [];
      }
    });
  
    const addProduct = (product) => {
      const newProduct = { id: generateUniqueId(), product };
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    };
  
    const deleteProduct = (id) => {
      setProducts((prevProducts) => prevProducts.filter((item) => item.id !== id));
    };
  
    const deleteAll = () => {
      setProducts ([]);
    }
  
    useEffect(() => {
      localStorage.setItem('products', JSON.stringify(products));
    }, [products]);
  
    const generateUniqueId = () => {
      return uuidv4();
    };
  
    return (
      <div className="App">
        <GroceryList products={products} 
        addProduct={addProduct} 
        deleteProduct={deleteProduct} 
        deleteAll={deleteAll}/>
      </div>
    );
  }
  
  export default Functions;
  