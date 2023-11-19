import { useEffect, useState } from "react";
import WomenSlide from "../../Components/Slides/WomenSlide/WomenSlide";
import "./Women.css";
import ProductContainer from "../../Components/ProductContainer/ProductContainer";
import Pagination from "../../Components/Pagination/Pagination";

export default function Women() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = Array.from({ length: 30 }, (_, index) => index + 1);
  const fetchProducts = async () => {
    const response = await fetch(
      `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={%22gender%22%3A%22Women%22}&page=${currentPage}`,
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
      <WomenSlide />
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
