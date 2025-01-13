import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../ProductsData';
import './ProductDetail.css';
import { useTranslation } from 'react-i18next'; // Import translation hook

function ProductDetail() {
    const { t } = useTranslation(); // Initialize translation
    const { productId } = useParams();

    // Find the product by ID
    const product = productsData
        .flatMap((cate) => cate.products)
        .find((product) => product.id === parseInt(productId));

    if (!product) {
        return <h2>{t("productDetail.notFound")}</h2>; // Translate "Product not found"
    }

    return (
        <div className="product-details">
            <div className="img">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="details">
                <div className="titl">
                    <h1>
                        {t("productDetail.type")} {/* Translated label */}
                    </h1>
                    <h2>{t(`products.${product.title}`)}</h2> {/* Translated product title */}
                </div>
                <div className="discrib">
                    <h1>
                        {t("productDetail.description")} {/* Translated label */}
                    </h1>
                    <p>{t(`descriptions.${product.description}`)}</p>  {/* Translated description */}
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;

