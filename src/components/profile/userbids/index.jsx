import StyleUserBids from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { toast } from "react-toastify";

const UserBids = () => {
  const [open, setOpen] = useState(true);
  return (
    <StyleUserBids>
      <ul>
        {open && (
          <li>
            <header>Laboratorgrand 1A, Wind, 24kWh</header>
            <div>
              <p>Offered price (kWh)</p>
              <span>SEK 70</span>
            </div>
            <div>
              <p>Offered by</p>
              <span>Natalia Kotliar</span>
            </div>
            <div className="buttons">
              <button
                onClick={() => {
                  setOpen(false);
                  toast.success("Request is accepted!");
                }}
              >
                <FontAwesomeIcon icon={faCheck} />
              </button>
              <button>
                <FontAwesomeIcon icon={faX} />
              </button>
            </div>
          </li>
        )}
        <li>
          <header>Laboratorgrand 1B, Solar, 30kWh</header>
          <div>
            <p>Offered price (kWh)</p>
            <span>SEK 85</span>
          </div>
          <div>
            <p>Offered by</p>
            <span>Irina Samus</span>
          </div>
          <div className="buttons">
            <button>
              <FontAwesomeIcon icon={faCheck} />
            </button>
            <button>
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>
        </li>
      </ul>
    </StyleUserBids>
  );
};

export default UserBids;
