import styled from "styled-components";

const StyleUserPurchases = styled.section`
  background-color: var(--color-white);
  border-radius: 4px;
  font-size: 18px;
  margin-bottom: 60px;
  padding: 30px;

  ul {
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

      p {
        font-weight: 600;
      }

      & > div {
        display: flex;
        justify-content: space-between;
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

export default StyleUserPurchases;
