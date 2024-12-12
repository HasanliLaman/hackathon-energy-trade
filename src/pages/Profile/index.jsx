import StyleProfile from "./style";
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
import { useQuery } from "@tanstack/react-query";
import { getOffers } from "../../server";
import { Link } from "react-router-dom";
import Container from "../../components/UI/Container";
import UserDetails from "../../components/profile/userdetails";
import UserBids from "../../components/profile/userbids";
import UserPurchases from "../../components/profile/userpurchases";
import UserOffers from "../../components/profile/useroffers";
import NewForm from "../../components/profile/newform";
import { useState } from "react";

const Profile = () => {
  const [openModel, setOpenModel] = useState(false);

  const { data: offersData, refetch } = useQuery({
    queryKey: ["offers"],
    queryFn: getOffers,
  });

  return (
    <StyleProfile>
      {openModel && <NewForm setOpenModel={setOpenModel} refetch={refetch} />}
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
        <h2>My details</h2>
        <UserDetails />
        <h2>My bidding requests</h2>
        <UserBids />
        <div className="btnOffer">
          <h2>My offers</h2>
          <button onClick={() => setOpenModel(true)}>New offer</button>
        </div>
        <UserOffers offersData={offersData} />
        <h2>My purchases</h2>
        <UserPurchases />
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
    </StyleProfile>
  );
};

export default Profile;
