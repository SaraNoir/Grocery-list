import React from 'react';
import { GroceryItem } from './GroceryItem';
import Form from './Form';

export function GroceryList({ products, addProduct, deleteProduct, deleteAll}) {
  return (
    <div className='grocery-list'>
      <button onClick={deleteAll}>Svuota lista</button>
    <div className="list">
      <h2>Lista della spesa:</h2>
      <ul>
        {products.map((item) => (
          <GroceryItem key={item.id} item={item} onDelete={deleteProduct} />
        ))}
      </ul>
    </div>
   <Form addProduct={addProduct} />
    </div>
  );
}
