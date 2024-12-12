import styled from "styled-components";

const StyleCheckoutSummary = styled.div`
  background: var(--color-homepage);
  width: 100%;
  max-width: 650px;
  padding: 40px 40px 50px 40px;
  border-radius: 15px;
  text-align: center;
  position: relative;

  img:first-child {
    width: 90%;
    left: 5%;
    position: absolute;
    z-index: 1;
    top: 0;
    transform: translateY(-70%);
  }

  img:last-child {
    width: 90%;
    left: 5%;
    position: absolute;
    z-index: 1;
    bottom: 0;
    transform: translateY(70%);
  }

  button {
    background: var(--color-accent);
    padding: 8px 44px;
    border-radius: 4px;
    font-size: 18px;
    border: 0;
    outline: 0;
    font-weight: 600;
    text-transform: capitalize;
    transition: all 0.3s;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;

    &:hover {
      background: #be8a49;
    }
  }

  a {
    color: var(--color-accent);
    transition: all 0.3s;

    &:hover {
      color: #be8a49;
    }
  }

  h2 {
    font-size: 32px;
    font-weight: 500;
  }

  h3 {
    font-size: 20px;
    font-weight: 500;
  }

  .payBtn {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  ul {
    font-size: 20px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    .total {
      font-weight: 600;

      span {
        font-size: 26px;
      }
    }

    li {
      display: flex;
      padding: 10px 0;
      align-items: center;
      justify-content: space-between;
      border-top: 0.1px solid rgba(84, 93, 92, 0.272);
    }

    span {
      color: #242e35;
    }
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 35px;
    }
  }
`;

export default StyleCheckoutSummary;
