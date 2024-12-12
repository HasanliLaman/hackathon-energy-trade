import StyleSort from "./style";
import { faArrowUpWideShort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Sort = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyleSort>
      <button onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faArrowUpWideShort} />
      </button>
      {open && (
        <ul>
          <li>Default</li>
          <li>Price ascending</li>
          <li>Price descending</li>
        </ul>
      )}
    </StyleSort>
  );
};

export default Sort;
