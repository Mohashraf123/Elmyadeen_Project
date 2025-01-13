import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import productsData from "../ProductsData";
import "./AboutProduc.css";

export default function AboutProduc() {
  const [randomProducts, setRandomProducts] = useState([]);
  const { t } = useTranslation(); // Initialize useTranslation

  // Function to randomly select three products from the data
  const getRandomProducts = () => {
    const allProducts = productsData.flatMap((category) => category.products);
    const shuffled = allProducts.sort(() => Math.random() - 0.5); // Shuffle array
    return shuffled.slice(0, 3); // Get first 3 products
  };

  useEffect(() => {
    setRandomProducts(getRandomProducts());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="aboutProduc">
      <h1 className="title">{t("aboutProduc.title")}</h1>
      <div className="aboutcontiner">
        {randomProducts.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.title} />
            <h2>{t(`products.${product.title}`)}</h2>
            <Link
              className="link"
              to={`/products/${product.id}`} // Navigate to product details page
              onClick={scrollToTop}
            >
              {t("aboutProduc.productDetails")}
            </Link>
          </div>
        ))}
      </div>
      <Link className="link" to="/products" onClick={scrollToTop}>
        {t("aboutProduc.viewMore")}
      </Link>
    </div>
  );
}
