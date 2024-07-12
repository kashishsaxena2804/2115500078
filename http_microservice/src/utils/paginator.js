const paginate = (items, pageSize, pageNumber) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
  };
  
  const sortProducts = (products, sortBy, sortOrder) => {
    if (!sortBy) return products;
    
    const sortedProducts = products.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return sortOrder === 'asc' ? -1 : 1;
      if (a[sortBy] > b[sortBy]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
    
    return sortedProducts;
  };
  
  module.exports = {
    paginate,
    sortProducts
  };
  