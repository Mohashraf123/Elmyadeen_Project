import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../ProductsData';
import ProductDetail from '../components/ProductDetail';


function ProductDetails() {
   

    return (
        <div className="product-details">
            <ProductDetail/>
        </div>
    );
}

export default ProductDetails;
