import ProductList from "../ProductList/ProductList";
import Sidebar from "../Sidebar/Sidebar";
import Sorting from "../Sorting/Sorting";
import "./ProductContainer.css";

export default function ProductContainer({ products, handleSort }) {
  return (
    <>
      <Sorting handleSort={handleSort} />
      <div className="main-container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="product-list-container">
          <ProductList products={products} />
        </div>
      </div>
    </>
  );
}
