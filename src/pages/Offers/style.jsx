import styled from "styled-components";
import OffersImg from "../../assets/images/offers-header.jpg";
import HeroSvg from "../../assets/images/homepage-header.svg";
import FooterImg from "../../assets/images/offers-footer.jpg";
import FooterSvg from "../../assets/images/homepage-footer.svg";

const StyleOffers = styled.section`
  background-color: var(--color-homepage);

  footer {
    position: relative;
    background-image: url(${FooterImg});
    position: relative;
    background-repeat: no-repeat;
    height: 200px;
    background-size: cover;

    .overlay {
      background-color: #00000080;
      background-image: url(${FooterSvg});
      background-position: 0% -0.5%;
      background-repeat: no-repeat;
      background-size: contain;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }

    & > div {
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding-top: 60px;
    }

    .socials {
      display: flex;
      align-items: center;
      gap: 30px;
      z-index: 1;

      svg {
        width: 30px;
        height: 30px;
        cursor: pointer;

        path {
          fill: var(--color-white);
        }
      }
    }

    .credits {
      z-index: 1;
      display: flex;
      margin-top: 15px;

      span {
        color: var(--color-white);
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 1px;
      }

      img {
        height: 18px;
        width: 18px;
        margin-left: 5px;
      }
    }
  }

  .logo {
    color: var(--color-white);
    font-size: 28px;
    line-height: 20px;
    text-transform: uppercase;
    font-weight: 600;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    letter-spacing: -1px;
    z-index: 1;
    position: absolute;
    top: 30px;
    left: auto;
    right: auto;

    span {
      font-size: 14px;
      line-height: 14px;
      letter-spacing: 3px;
      color: var(--color-accent);
    }
  }

  .hero {
    background-image: url(${OffersImg});
    position: relative;
    background-repeat: no-repeat;
    height: 170px;
    background-size: cover;

    .cart {
      svg {
        position: absolute;
        top: 40px;
        right: 30px;
      }
    }

    .profile {
      svg {
        position: absolute;
        top: 40px;
        right: 70px;
      }
    }

    .offers {
      svg {
        position: absolute;
        top: 40px;
        right: 110px;
      }
    }

    .overlay {
      background-color: #00000080;
      background-image: url(${HeroSvg});
      background-position: 50% 101%;
      background-repeat: no-repeat;
      background-size: contain;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
  }
`;

export default StyleOffers;
