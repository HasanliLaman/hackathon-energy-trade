import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faInstagram,
  faXTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import StyleHomepage from "./style";
import Container from "../UI/Container";
import IcnBear from "../../assets/images/icon-bear.svg";

const HomepageMain = () => {
  return (
    <StyleHomepage>
      <section className="hero">
        <div className="overlay"></div>
        <Container>
          <Link to="/" className="logo">
            Energy <span>Trading</span>
          </Link>
          <article>
            <h1>Empower Your Energy: Buy, Sell, and Trade Sustainably</h1>
            <Link to="/signin">
              <button>Start now</button>
            </Link>
          </article>
        </Container>
      </section>
      <section className="information">
        <Container>
          <p>
            Welcome to the future of energy trading! Our platform empowers you
            to buy, sell, and trade renewable energy directly with others in
            your community. Using secure blockchain technology, we ensure every
            transaction is transparent, reliable, and hassle-free. Discover
            energy offers, post your surplus energy for sale, or negotiate the
            best deals—all while contributing to a more sustainable and
            decentralized energy market. Join us today and take control of your
            energy future!
          </p>
          <p>
            Experience a seamless and innovative way to engage with renewable
            energy. Our user-friendly platform allows you to explore energy
            offers, track your transactions, and manage your account
            effortlessly. Whether you are a seller looking to share your surplus
            energy or a buyer seeking cost-effective options, our system is
            designed to meet your needs. Together, we can create a connected,
            eco-friendly community, driving the adoption of renewable energy for
            a greener tomorrow.
          </p>
        </Container>
      </section>
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
    </StyleHomepage>
  );
};

export default HomepageMain;
