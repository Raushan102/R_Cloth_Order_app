import { currencyFormatter } from "./formatter";

function Product({ id, image, title, price, description, onAddCart }) {
  return (
    <article className="product">
      <img src={image} alt="cloth-img" />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">{currencyFormatter.format(price)}</p>
          <p>{description}</p>
        </div>

        <p className="product-actions">
          <button onClick={onAddCart}>add to card</button>
        </p>
      </div>
    </article>
  );
}

export default Product;
