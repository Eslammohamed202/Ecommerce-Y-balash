// lib/api.js
import axios from 'axios';

const BASE_URL = 'https://y-balash.vercel.app/api/seller';

export const fetchOrdersStats = async () => {
  const { data } = await axios.get(`${BASE_URL}/orders/stats`);
  return data;
};

export const fetchMonthlyEarnings = async () => {
  const { data } = await axios.get(`${BASE_URL}/monthly-earnings`);
  return data;
};

export const fetchLowStockCount = async () => {
  const { data } = await axios.get(`${BASE_URL}/low-stock-count`);
  return data;
};

export const fetchProductsStats = async () => {
  const { data } = await axios.get(`${BASE_URL}/products-stats`);
  return data;
};
