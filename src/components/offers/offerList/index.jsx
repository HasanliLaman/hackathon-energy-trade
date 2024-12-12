import FilterBar from "../filterBar";
import { useQuery } from "@tanstack/react-query";
import StyleOfferList from "./style";
import { getOffers } from "../../../server";
import { toast } from "react-toastify";

const OfferList = () => {
  const { data: offersData } = useQuery({
    queryKey: ["offers"],
    queryFn: getOffers,
  });
  return (
    <StyleOfferList>
      <FilterBar />
      <h2>Offers</h2>
      <ul>
        {offersData?.data?.offers &&
          offersData?.data.offers
            .filter(
              (el) => el.owner !== JSON.parse(localStorage.getItem("user")).id
            )
            .map((el) => (
              <li key={el._id}>
                <header>{el.address}</header>
                <div>
                  <p>Type</p>
                  <span>{el.type}</span>
                </div>
                <div>
                  <p>Amount (kWh)</p>
                  <span>{el.amount}</span>
                </div>
                <div>
                  <p>Price (kWh)</p>
                  <span>SEK {el.price}</span>
                </div>
                <button
                  onClick={() => toast.success("Offer is added to cart!")}
                >
                  Add to cart
                </button>
              </li>
            ))}
      </ul>
    </StyleOfferList>
  );
};

export default OfferList;
