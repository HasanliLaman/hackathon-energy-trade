import styled from "styled-components";
import HeroImg from "../../assets/images/homepage-hero.jpg";
import HeroSvg from "../../assets/images/homepage-header.svg";
import FooterImg from "../../assets/images/homepage-footer.jpg";
import FooterSvg from "../../assets/images/homepage-footer.svg";

const StyleHomepage = styled.section`
  background-color: var(--color-homepage);

  button {
    cursor: pointer;
    background: var(--color-accent);
    padding: 8px 20px;
    border-radius: 4px;
    font-size: 20px;
    margin-top: 20px;
    border: 0;
    outline: 0;
    font-weight: 600;
    text-transform: capitalize;
    transition: all 0.3s;
    color: #333;

    &:hover {
      background: #be8a49;
    }
  }

  footer {
    position: relative;
    background-image: url(${FooterImg});
    position: relative;
    background-repeat: no-repeat;
    height: 260px;
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
      margin-top: 25px;

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

  article {
    justify-self: center;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -50px;
    max-width: 900px;
  }

  .hero {
    background-image: url(${HeroImg});
    position: relative;
    background-repeat: no-repeat;
    height: 600px;
    background-size: cover;

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

    h1 {
      color: var(--color-white);
      font-weight: 400;
      font-size: 40px;
      text-align: center;
      line-height: 40px;
    }
  }

  .information {
    padding: 120px 0;
    font-size: 22px;
    line-height: 24px;

    & > div {
      display: flex;
      flex-direction: column;
      gap: 35px;
    }
  }

  @media (min-width: 768px) {
    .hero {
      h1 {
        font-size: 70px;
        line-height: 75px;
      }
    }
  }
`;

export default StyleHomepage;
