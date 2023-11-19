import { useEffect, useState } from "react";
import MenSlide from "../../Components/Slides/MenSlide/MenSlide";
import "./Men.css";
import ProductContainer from "../../Components/ProductContainer/ProductContainer";
import Pagination from "../../Components/Pagination/Pagination";

export default function Men() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = Array.from({ length: 30 }, (_, index) => index + 1);
  const fetchProducts = async () => {
    const response = await fetch(
      `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={%22gender%22%3A%22Men%22}&page=${currentPage}`,
      {
        headers: {
          projectId: "ulwb3huij7ys",
        },
      }
    );
    const jsonData = await response.json();
    setProducts(jsonData.data);
    console.log(products);
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const handlePrevButton = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage(currentPage - 1);
  };
  const handleNextButton = () => {
    if (currentPage === 30) {
      return;
    }
    setCurrentPage(currentPage + 1);
  };
  return (
    <>
      <MenSlide />
      <ProductContainer products={products} />
      <Pagination
        handleNextButton={handleNextButton}
        handlePrevButton={handlePrevButton}
        pageNumbers={pageNumbers}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}
