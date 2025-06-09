"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { FaEdit, FaTrash, FaEye, FaFileExport } from 'react-icons/fa';
import { MdEdit } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

const productsData = [
  {
    id: 1,
    name: 'Cheese Cake',
    sku: 'SKU-034',
    stock: 45,
    price: 129.99,
    date: 'Apr 15, 2025',
    image: '/caake.png',
  },
  {
    id: 2,
    name: 'Bread X2',
    sku: 'SKU-0095',
    stock: 5,
    price: 199.99,
    date: 'Apr 14, 2025',
    image: '/caake.png',
  },
  {
    id: 3,
    name: 'Donuts',
    sku: 'SKU-0016',
    stock: 0,
    price: 249.99,
    date: 'Apr 13, 2025',
    image: '/caake.png',
  },
];

const getStockStatus = (stock) => {
  if (stock === 0)
    return <span className="text-xs px-2 py-1 bg-[#FEE2E2] text-[#ED2226] rounded-full">Out of Stock</span>;
  if (stock <= 5)
    return <span className="text-xs px-2 py-1 bg-[#FEF3C7] text-[#D97706] rounded-full">Low Stock ({stock})</span>;
  return <span className="text-xs px-2 py-1 bg-[#D1FAE5] text-[#059669] rounded-full">In Stock ({stock})</span>;
};

const Product = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 mt-2 container">
      {/* 🔍 Search & Filter Section */}
      <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center bg-white rounded-xl mt-8 p-4 lg:mx-20 mb-8">
        <div className="relative w-full lg:w-auto mb-2 lg:mb-0">
          <input
            type="text"
            placeholder="Search products..."
            className="p-3 pl-10 w-full lg:w-[500px] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-Main/50 transition duration-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
        <div className="relative flex gap-2 mt-2 lg:mt-0">
          <select className="appearance-none bg-white border border-gray-300 rounded-xl px-4 py-2 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-Main">
            <option>Sort: By</option>
            <option>Oldest</option>
            <option>A-Z</option>
            <option>Z-A</option>
          </select>
          <select className="appearance-none bg-white border border-gray-300 rounded-xl px-4 py-2 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-Main">
            <option>Filtered By Categories</option>
            <option>Category A</option>
            <option>Category B</option>
            <option>Category C</option>
          </select>
        </div>
      </div>

      {/* 🧰 Action Buttons */}
      <div className="flex items-center gap-4 mb-6 text-sm text-gray-600 bg-white my-1 p-4 rounded-xl">
        <button className="flex items-center gap-1 text-[#ED2226] font-semibold"><FaTrash className='size-7' /> Delete</button>
        <button className="flex items-center gap-1 text-[#34A853] font-semibold"><FaFileExport className='size-7' /> Export</button>
        <button className="flex items-center gap-1 text-[#164A93] font-semibold"><MdEdit className='size-7' /> Edit Stock</button>
      </div>

      {/* 📦 Products Table */}
      <table className="w-full text-sm text-left bg-white">
        <thead className="bg-gray-100 text-gray-600 uppercase">
          <tr>
            <th className="p-2"><input type="checkbox" /></th>
            <th className="p-2 text-[#1C573E]">Product</th>
            <th className="p-2 text-[#1C573E]">SKU</th>
            <th className="p-2 text-[#1C573E]">Stock</th>
            <th className="p-2 text-[#1C573E]">Price</th>
            <th className="p-2 text-[#1C573E]">Last Updated</th>
            <th className="p-2 text-[#1C573E]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-50">
                <td className="p-2"><input type="checkbox" /></td>
                <td className="p-2 flex items-center gap-2 text-[#1C573E]">
                  <img src={product.image} alt={product.name} className="w-10 h-10 rounded-full" />
                  {product.name}
                </td>
                <td className="p-2">{product.sku}</td>
                <td className="p-2">{getStockStatus(product.stock)}</td>
                <td className="p-2">EGP {product.price.toFixed(2)}</td>
                <td className="p-2">{product.date}</td>
                <td className="p-2 flex gap-2 text-[#164A93]">
                  <Link href={`/edit-product/${product.id}`}>
                    <FaEdit className="cursor-pointer" />
                  </Link>
                  <button><FaTrash className="text-[#ED2226] cursor-pointer" /></button>
                  <button><FaEye className="text-[#4B5563] cursor-pointer" /></button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="p-4 text-center text-gray-400">No products found.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* 📄 Pagination */}
      <div className="flex justify-between text-sm text-gray-500 mt-6 mb-6">
        <span>Showing 1 to {filteredProducts.length} of {productsData.length} entries</span>
        <div className="flex gap-2">
          <button className="px-2 py-1 border-[2px] border-Main/10 rounded">Previous</button>
          <button className="px-2 py-1 border-[2px] border-Main/10 rounded bg-Main text-white">1</button>
          <button className="px-2 py-1 border-[2px] border-Main/10 rounded">2</button>
          <button className="px-2 py-1 border-[2px] border-Main/10 rounded">3</button>
          <button className="px-2 py-1 border-[2px] border-Main/10 rounded">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
