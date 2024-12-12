import { Link } from "react-router-dom";
import StyleCartSummary from "./style";

const CartSummary = () => {
  return (
    <StyleCartSummary>
      <h2>Cart totals</h2>
      <div className="total">
        <p>Total</p>
        <span>SEK 120</span>
      </div>
      <Link to="/checkout">
        <button>Proceed to checkout</button>
      </Link>
    </StyleCartSummary>
  );
};

export default CartSummary;
