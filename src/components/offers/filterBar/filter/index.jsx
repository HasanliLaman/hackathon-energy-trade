import StyleFilter from "./style";
import { useState } from "react";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Filter = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyleFilter>
      <button onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faFilter} />
      </button>
      {open && (
        <ul>
          <li>
            <select>
              <option value="">Type</option>
              <option value="solar">Solar</option>
              <option value="wind">Wind</option>
              <option value="water">Water</option>
            </select>
          </li>
          <li>
            <input min={0} type="number" placeholder="Max price" />
          </li>
          <li>
            <input min={0} type="number" placeholder="Max amount" />
          </li>
        </ul>
      )}
    </StyleFilter>
  );
};

export default Filter;
