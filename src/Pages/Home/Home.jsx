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

  const sortProducts = (key, order) => {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      if (order === "asc") {
        return a[key].localeCompare(b[key]);
      } else if (order === "desc") {
        return b[key].localeCompare(a[key]);
      } else if (order === "lowToHigh") {
        return a[key] - b[key];
      } else if (order === "highToLow") {
        return b[key] - a[key];
      }
      return 0;
    });
    setProducts(sortedProducts);
  };

  const handleSort = (event) => {
    const { value } = event.target;
    switch (value) {
      case "AtoZ":
        sortProducts("name", "asc");
        break;
      case "ZtoA":
        sortProducts("name", "desc");
        break;
      case "lowToHigh":
        sortProducts("price", "lowToHigh");
        break;
      case "highToLow":
        sortProducts("price", "highToLow");
        break;
      default:
        break;
    }
    setCurrentPage(1);
  };
  return (
    <>
      <AllSlide />
      <ProductContainer products={products} handleSort={handleSort} />
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
