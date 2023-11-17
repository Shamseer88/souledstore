import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
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
