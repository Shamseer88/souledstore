import { useEffect, useState } from "react";
import ProductContainer from "../../Components/ProductContainer/ProductContainer";
import AllSlide from "../../Components/Slides/CommonSlide/AllSlide";
import "./Home.css";
import Pagination from "../../Components/Pagination/Pagination";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = Array.from({ length: 30 }, (_, index) => index + 1);
  const fetchProducts = async () => {
    const response = await fetch(
      `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?page=${currentPage}`,
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
      <AllSlide />
      <ProductContainer products={products} />
      {/* <div className="pagination">
        <button onClick={handlePrevButton}>Prev</button>
        {pageNumbers.map((value) => (
          <button key={value} onClick={() => setCurrentPage(value)}>
            {value}
          </button>
        ))}
        <button onClick={handleNextButton}>Next</button>
      </div> */}
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
