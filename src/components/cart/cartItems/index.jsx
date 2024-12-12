import StyleCartItems from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import AddBid from "../addbid";

const CartItems = () => {
  return (
    <StyleCartItems>
      <li>
        <header>Karlgårdsvägen 15</header>
        <p>Water</p>
        <p>100 kWh</p>
        <span>SEK 88</span>
        <AddBid />
        <button className="deleteBtn">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </li>
      <li>
        <header>Ploggatan 2</header>
        <p>Solar</p>
        <p>13 kWh</p>
        <span>SEK 32</span>
        <AddBid />
        <button className="deleteBtn">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </li>
    </StyleCartItems>
  );
};

export default CartItems;
