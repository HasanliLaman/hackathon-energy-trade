import StyleCheckoutSummary from "./style";
import ImgTop from "../../assets/images/homepage-header.svg";
import ImgBottom from "../../assets/images/homepage-footer.svg";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const CheckoutSummary = () => {
  return (
    <StyleCheckoutSummary>
      <img src={ImgTop} />
      <h2>Checkout</h2>
      <ul>
        <li>
          <p>100 kWh, Karlgårdsvägen 15</p>
          <span>88 tokens</span>
        </li>
        <li>
          <p>13 kWh, Ploggatan 2</p>
          <span>32 tokens</span>
        </li>
        <li className="total">
          <p>Total</p>
          <span>120 tokens</span>
        </li>
      </ul>
      <div className="payBtn">
        <Link to="/offers">
          <button onClick={() => toast.success("Payment completed!")}>
            Pay
          </button>
        </Link>
      </div>
      <img src={ImgBottom} />
    </StyleCheckoutSummary>
  );
};

export default CheckoutSummary;
