import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <div className="product-card" onClick={() => navigate("/single-product")}>
      <div className="product-image-div">
        <img
          src={product.displayImage}
          alt={product.name}
          width="100%"
          className="product-image"
        />
      </div>
      <div className="product-brand-div">
        <p>Brand : {product.brand}</p>
      </div>
      <p className="product-name">{product.name}</p>
      <h5 className="product-price">₹{product.price}</h5>
    </div>
  );
}
