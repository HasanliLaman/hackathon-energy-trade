import styled from "styled-components";

const StyleUserDetails = styled.section`
  background-color: var(--color-white);
  border-radius: 4px;
  font-size: 18px;
  display: grid;
  margin-bottom: 60px;

  & > * {
    padding: 30px;
  }

  .details {
    display: flex;
    flex-direction: column;

    li:not(:last-of-type) {
      border-bottom: 0.1px solid rgba(84, 93, 92, 0.272);
    }

    li {
      display: flex;
      align-items: center;
      padding: 10px 0;
      justify-content: space-between;

      p {
        font-weight: 600;
      }
    }
  }

  .balance {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    article {
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    p {
      font-size: 30px;
    }

    span:first-of-type {
      font-weight: 500;
      font-size: 60px;
      line-height: 50px;
    }

    span:last-of-type {
      font-weight: 600;
      font-size: 20px;
    }

    & > div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      width: 100%;

      button {
        background: var(--color-accent);
        padding: 8px 24px;
        border-radius: 4px;
        width: 100%;
        font-size: 16px;
        border: 0;
        outline: 0;
        font-weight: 600;
        text-transform: capitalize;
        transition: all 0.3s;
        color: #333;
        cursor: pointer;

        &:hover {
          background: #be8a49;
        }
      }

      button:last-of-type {
        background: #545d5c;
        color: var(--color-white);

        &:hover {
          background: #737d7c;
        }
      }
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default StyleUserDetails;
