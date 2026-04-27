import React from 'react'
import { useParams } from 'react-router-dom';

function ProductsDetails() {
    const params = useParams();
 const { productId, categoryId } = useParams();
    console.log(params)
    
  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">Products Details</h2>
        <p>Product ID: {productId}</p>
        <p>Category ID: {categoryId}</p>
    </div>
  )
}

export default ProductsDetails