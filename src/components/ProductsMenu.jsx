import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ProductsMenu.css";
import productsData from "../ProductsData";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook

const ITEMS_PER_PAGE = 12;

function ProductsMenu() {
  const { t } = useTranslation(); // Initialize translation hook
  const [selectedCate, setSelectedCate] = useState("all"); // Initialize category selection to 'all'
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCate(event.target.value);
    setCurrentPage(1);
  };

  const allProducts =
    selectedCate === "all"
      ? productsData.flatMap((cate) => cate.products)
      : productsData.find((cate) => cate.category === selectedCate)?.products ||
        [];

  const totalPages = Math.ceil(allProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = allProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to the top
  };

  return (
    <div className="productsmenu">
      {/* Title translated */}
      <h1 className="title">{t("productsMenu.title")}</h1>

      <div className="input">
        {/* Dropdown translation */}
        <select onChange={handleCategoryChange} value={selectedCate}>
          <option value="all">{t("productsMenu.all")}</option>
          {productsData.map((category) => (
            <option key={category.category} value={category.category}>
              {t(`categories.${category.category}`)}{" "}
              {/* Category name translated */}
            </option>
          ))}
        </select>
      </div>

      <motion.div
        key={selectedCate}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="producContainer"
      >
        {paginatedProducts.map((product, index) => (
          <div key={index} className="product" data-aos="fade-up">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            {/* Using product title translation */}
            <h2>{t(`products.${product.title}`)}</h2>
            <Link
              className="link"
              to={`/products/${product.id}`}
              onClick={scrollToTop}
            >
              {t("productsMenu.viewDetails")}{" "}
              {/* Using translation key for "View Details" */}
            </Link>
          </div>
        ))}
      </motion.div>

      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`page-button ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductsMenu;
