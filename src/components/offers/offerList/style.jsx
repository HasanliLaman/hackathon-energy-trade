import styled from "styled-components";

const StyleOfferList = styled.div`
  padding: 70px 0 100px;

  h2 {
    font-size: 34px;
    font-weight: 500;
    line-height: 37.4px;
    margin-bottom: 30px;
  }

  & > ul {
    display: grid;
    gap: 25px;

    li {
      display: flex;
      flex-direction: column;
      background-color: #f4f3ef;
      padding: 20px;
      border-radius: 4px;
      font-size: 18px;

      header {
        font-weight: 600;
        font-size: 20px;
        margin-bottom: 10px;
        color: #242e35;
      }

      span {
        text-transform: capitalize;
      }

      p {
        font-weight: 600;
      }

      & > div {
        display: flex;
        justify-content: space-between;
      }

      button {
        color: var(--color-accent);
        font-weight: 500;
        margin-top: 5px;
        transition: all 0.3s;
        align-self: center;
        cursor: pointer;

        &:hover {
          color: #be8a49;
        }
      }
    }
  }

  @media (min-width: 576px) {
    ul {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 768px) {
    ul {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default StyleOfferList;
