import { useState, useEffect } from 'react';
import allProducts from '../db.json';

export default function usePaginate(pageNumber) {
  const { products } = allProducts;
  const pageSize = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [totalPages, setTotalPages] = useState(products.length / pageSize);

  useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    setCurrentData(products.slice(startIndex, endIndex));
    setCurrentPage(pageNumber ? pageNumber : 1);
  }, [currentPage, pageSize, pageNumber, products]);

  return {
    currentData,
    totalPages
  };
}
