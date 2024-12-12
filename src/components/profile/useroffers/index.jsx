import StyleUserOffers from "./style";
import { useQuery } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { getOffers } from "../../../server";

const UserOffers = () => {
  const { data: offersData } = useQuery({
    queryKey: ["offers"],
    queryFn: getOffers,
  });

  return (
    <StyleUserOffers>
      <ul>
        {offersData?.data?.offers &&
          offersData?.data.offers
            .filter(
              (el) => el.owner === JSON.parse(localStorage.getItem("user")).id
            )
            .map((el) => (
              <li key={el._id}>
                <header>{el.address}</header>
                <p>{el.type}</p>
                <p>{el.amount} kWh</p>
                <span>SEK {el.price}</span>
                <button className="deleteBtn">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </li>
            ))}
      </ul>
    </StyleUserOffers>
  );
};

export default UserOffers;
