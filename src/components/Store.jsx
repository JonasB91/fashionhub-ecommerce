import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';

const Store = () => {
  const { products, loading } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
        />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="divide-y divide-gray-200">
          {filteredProducts.map(product => (
            <li key={product.id} className="py-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">Price: ${product.price}</p>
              <p className="text-gray-600">Description: {product.description}</p>
            </li>
          ))}
        </ul>
        )}
      </div>
    </div>
  );
};

export default Store;
