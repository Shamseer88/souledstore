import ProductList from "../ProductList/ProductList";
import Sidebar from "../Sidebar/Sidebar";
import "./ProductContainer.css";

export default function ProductContainer({ products }) {
  return (
    <div className="main-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="product-list-container">
        <ProductList products={products} />
      </div>
    </div>
  );
}
