import "./SingleProduct.css";
import { FaRegHeart } from "react-icons/fa6";

export default function SingleProduct() {
  return (
    <>
      <div className="single-product-container">
        <div className="single-product-left">
          <div className="image-grid">
            <img
              src="https://images.bewakoof.com/t1080/men-s-aqua-green-shirt-596661-1686843823-2.jpg"
              alt="image1"
            />
            <img
              src="https://images.bewakoof.com/t1080/men-s-aqua-green-shirt-596661-1686843829-3.jpg"
              alt="image1"
            />
            <img
              src="https://images.bewakoof.com/t1080/men-s-aqua-green-shirt-596661-1686843834-4.jpg"
              alt="image1"
            />
            <img
              src="https://images.bewakoof.com/t1080/men-s-aqua-green-shirt-596661-1686843840-5.jpg"
              alt="image1"
            />
            <img
              src="https://images.bewakoof.com/t1080/men-s-aqua-green-shirt-596661-1686843846-6.jpg"
              alt="image1"
            />
            <img
              src="https://images.bewakoof.com/t1080/men-s-aqua-green-shirt-596661-1686843851-7.jpg"
              alt="image1"
            />
          </div>
        </div>
        <div className="single-product-right">
          <div className="single-product-name">
            <h3>Bewakoof® : Men's Aqua Green Shirt</h3>
            <p>shirt</p>
          </div>
          <hr />
          <div className="single-product-price">
            <h3>₹ 849</h3>
          </div>
          <div className="single-product-size">
            <p>Please select a size:</p>
            <div className="single-product-size-btns">
              <button>M</button>
              <button>L</button>
              <button>XL</button>
            </div>
          </div>
          <div className="single-product-quantity">
            <label htmlFor="quantity">Quantity : </label>
            <select name="quantity" id="quantity">
              <option value="1">01</option>
              <option value="2">02</option>
              <option value="3">03</option>
              <option value="4">04</option>
              <option value="5">05</option>
              <option value="6">06</option>
              <option value="7">07</option>
              <option value="8">08</option>
              <option value="9">09</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="cart-wishlist-btns">
            <button className="single-product-add-to-cart-btn">
              Add to cart
            </button>
            <button className="single-product-add-to-wishlist-btn">
              <FaRegHeart size={12} />
              &nbsp;Add to wishlist
            </button>
          </div>
        </div>
      </div>
      <div className="single-product-description">
        <h3 className="single-product-description-heading">Product Details:</h3>
        <p>
          Wear this stylish shirt from the house of Campus Sutra. The shirt is
          comfortable to wear as the fabrics are light on the skin. Using
          stellar quality solvents, the shirt is made for your daily schedule.
          Constructed to fit your style spot on and a wide range of sizes to
          match your persona. Made to not leech out its colours and not lose its
          shape either. Fetch a casual and cool look for yourself by teaming it
          with a pair of trousers and sneakers. Whether you are dressing up for
          a date or going to work, this Campus Sutra shirt is designed keeping
          in mind the latest trends in contemporary casual fashion. Combining
          style with the fashion of today and makes you stand out among others
          when you adore it. An all-in-all guide for your wardrobe. The ultimate
          addition to your casual closet. Perfect for year-round occasions from
          summertime to cool winters. Strong, dynamic essence for your quirky
          personality. Campus Sutra showcases a stylish edit that will instantly
          upgrade your look. Charming looks and infinite comfort be it stylish
          all-over prints or solid pastels, our clothes are designed to ensure
          that you can be at the top of your style game. Our vast range of
          jackets, shirts, trousers and much more are curated to be dependable
          and relaxing.
        </p>
      </div>
    </>
  );
}
