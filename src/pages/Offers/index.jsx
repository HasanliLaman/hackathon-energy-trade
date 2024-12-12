import StyleOffers from "./style";
import Container from "../../components/UI/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCartShopping,
  faUser,
  faRectangleList,
} from "@fortawesome/free-solid-svg-icons";
import IcnBear from "../../assets/images/icon-bear.svg";
import OfferList from "../../components/offers/offerList";
import { Link } from "react-router-dom";

const Offers = () => {
  return (
    <StyleOffers>
      <section className="hero">
        <div className="overlay"></div>
        <Container>
          <Link to="/" className="logo">
            Energy <span>Trading</span>
          </Link>
        </Container>
        <Link className="offers" to="/offers">
          <FontAwesomeIcon
            cursor="pointer"
            color="#fff"
            icon={faRectangleList}
          />
        </Link>
        <Link className="profile" to="/profile">
          <FontAwesomeIcon cursor="pointer" color="#fff" icon={faUser} />
        </Link>
        <Link className="cart" to="/cart">
          <FontAwesomeIcon
            cursor="pointer"
            color="#fff"
            icon={faCartShopping}
          />
        </Link>
      </section>
      <Container>
        <OfferList />
      </Container>
      <footer>
        <div className="overlay"></div>
        <Container>
          <div className="socials">
            <a href="/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </div>
          <p className="credits">
            <span>2024 Made by Polar Bears</span>
            <img src={IcnBear} />
            <span> . All rights reserved.</span>
          </p>
        </Container>
      </footer>
    </StyleOffers>
  );
};

export default Offers;
