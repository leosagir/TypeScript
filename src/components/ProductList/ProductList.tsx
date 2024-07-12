import React, { useState } from "react";
import './ProductList.css';

interface Product {
  id: string;
  name: string;
  price: number;
}

const availableProducts: Product[] = [
  { id: 'product1', name: 'Laptop', price: 1000 },
  { id: 'product2', name: 'Smartphone', price: 500 },
  { id: 'product3', name: 'Headphones', price: 100 },
  { id: 'product4', name: 'Keyboard', price: 50 },
  { id: 'product5', name: 'Monitor', price: 200 },
];

export default function ProductList() {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const handleAddProduct = (product: Product) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  const handleRemoveProduct = (productId: string) => {
    setSelectedProducts(selectedProducts.filter(product => product.id !== productId));
  };

  const isProductSelected = (productId: string): boolean => {
    return selectedProducts.some(product => product.id === productId);
  };

  return (
    <div className="product-list-container">
      <div className="product-list">
        <h3>Available Products</h3>
        <ul>
          {availableProducts.map((product) => (
            <li
              key={product.id}
              className={isProductSelected(product.id) ? 'disabled' : ''}
              onClick={() => !isProductSelected(product.id) && handleAddProduct(product)}
            >
              {product.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="selected-products">
        <h3>Selected Products</h3>
        <ul>
          {selectedProducts.map((product) => (
            <li
              key={product.id}
              onClick={() => handleRemoveProduct(product.id)}
              className="selected-product"
            >
              {product.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
