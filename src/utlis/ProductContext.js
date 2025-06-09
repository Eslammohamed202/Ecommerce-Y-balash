'use client';

import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const defaultProducts = [
    {
      id: 1,
      name: 'Cheese Cake',
      sku: 'SKU-001234',
      stock: 45,
      price: 129.99,
      date: 'Apr 15, 2025',
      image: '/caake.png',
      category: 'Dessert',
      description: '',
      tags: [],
      discount: 0,
      status: 'active',
    },
    {
      id: 2,
      name: 'Bread X2',
      sku: 'SKU-001235',
      stock: 5,
      price: 199.99,
      date: 'Apr 14, 2025',
      image: '/caake.png',
      category: 'Dessert',
      description: '',
      tags: [],
      discount: 0,
      status: 'active',
    },
    {
      id: 3,
      name: 'Donuts',
      sku: 'SKU-001236',
      stock: 50,
      price: 199.99,
      date: 'Apr 13, 2025',
      image: '/caake.png',
      category: 'Dessert',
      description: '',
      tags: [],
      discount: 0,
      status: 'active',
    },
  ];

  const [products, setProducts] = useState(defaultProducts);
  const [filteredProducts, setFilteredProducts] = useState(defaultProducts);
  const [searchQuery, setSearchQuery] = useState(''); // حالة جديدة للاستعلام البحث

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedProducts = localStorage.getItem('products');
      try {
        if (savedProducts) {
          const parsedProducts = JSON.parse(savedProducts);
          if (Array.isArray(parsedProducts) && parsedProducts.length > 0) {
            setProducts(parsedProducts);
            applyFilters(parsedProducts, searchQuery); // تطبيق الفلاتر عند التحميل
          }
        }
      } catch (error) {
        console.error('Error parsing localStorage products:', error);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('products', JSON.stringify(products));
      applyFilters(products, searchQuery); // تطبيق الفلاتر عند تغيير المنتجات
    }
  }, [products]);

  // دالة واحدة لتطبيق كل الفلاتر
  const applyFilters = (productsToFilter, query = '') => {
    let result = [...productsToFilter];
    
    // تطبيق البحث إذا كان هناك استعلام
    if (query.trim()) {
      const lowerCaseQuery = query.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(lowerCaseQuery) ||
          product.sku.toLowerCase().includes(lowerCaseQuery) ||
          product.category.toLowerCase().includes(lowerCaseQuery) ||
          (product.tags && 
            product.tags.some((tag) => tag.toLowerCase().includes(lowerCaseQuery)))
      );
    }
    
    setFilteredProducts(result);
  };

  const addProduct = (product) => {
    const getBase64 = (file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(file);
      });
    };

    const setImage = async () => {
      if (product.images && product.images.length > 0) {
        return await getBase64(product.images[0]);
      }
      return '/caake.png';
    };

    setImage().then((image) => {
      setProducts((prevProducts) => {
        const newProduct = {
          ...product,
          id: prevProducts.length > 0 ? Math.max(...prevProducts.map(p => p.id)) + 1 : 1,
          date: new Date().toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          }),
          status: product.stock > 0 ? 'active' : 'out of stock',
          image,
          images: product.images || [],
          tags: product.tags || [],
        };
        const newProducts = [...prevProducts, newProduct];
        applyFilters(newProducts, searchQuery);
        return newProducts;
      });
    });
  };

  const updateProduct = (updatedProduct) => {
    const getBase64 = (file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(file);
      });
    };

    const setImage = async () => {
      if (updatedProduct.images && updatedProduct.images.length > 0) {
        return await getBase64(updatedProduct.images[0]);
      }
      return updatedProduct.image || '/caake.png';
    };

    setImage().then((image) => {
      setProducts((prevProducts) => {
        const newProducts = prevProducts.map((p) =>
          p.id === updatedProduct.id
            ? {
                ...updatedProduct,
                status: updatedProduct.stock > 0 ? 'active' : 'out of stock',
                date: p.date,
                image,
                tags: updatedProduct.tags || [],
              }
            : p
        );
        applyFilters(newProducts, searchQuery);
        return newProducts;
      });
    });
  };

  const deleteProduct = (id) => {
    setProducts((prevProducts) => {
      const newProducts = prevProducts.filter((p) => p.id !== id);
      applyFilters(newProducts, searchQuery);
      return newProducts;
    });
  };

  const resetProducts = () => {
    setProducts(defaultProducts);
    setSearchQuery(''); // إعادة تعيين استعلام البحث
    applyFilters(defaultProducts, '');
    if (typeof window !== 'undefined') {
      localStorage.setItem('products', JSON.stringify(defaultProducts));
    }
  };

  const searchProducts = (query) => {
    setSearchQuery(query); // حفظ استعلام البحث
    applyFilters(products, query);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        searchQuery,
        addProduct,
        updateProduct,
        deleteProduct,
        resetProducts,
        searchProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};