import React, { createContext, useEffect, useState } from "react";
import { db } from "../firebase/config";
import { getDocs, collection, doc } from "firebase/firestore";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

        useEffect(()=> {
            const fetchProducts = async () => {
                try {
                    const snapshot = await getDocs(collection(db, 'products'));
                    const productList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                    console.log(productList);
                    setProducts(productList);
                    setLoading(false);
                } catch (error) {
                    console.error('Error Fetching products from database', error)
                }
            };

            fetchProducts();
        }, []);

        return (
            <ProductContext.Provider value={{ products, loading }}>
                {children}
            </ProductContext.Provider>
        );
};

export { ProductContext, ProductProvider };