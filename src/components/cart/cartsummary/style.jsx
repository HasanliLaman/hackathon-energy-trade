import styled from "styled-components";

const StyleCartSummary = styled.div`
  background-color: var(--color-white);
  padding: 30px;
  font-size: 20px;
  border-radius: 4px;

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;

    span {
      color: #242e35;
      font-weight: 600;
      letter-spacing: 1px;
    }
  }

  button {
    background: #545d5c;
    padding: 20px 27px;
    width: 100%;
    font-size: 16px;
    border: 0;
    outline: 0;
    font-weight: 600;
    text-transform: capitalize;
    transition: all 0.3s;
    color: var(--color-white);
    cursor: pointer;
    margin-top: 30px;

    &:hover {
      background: #be8a49;
    }
  }

  h2 {
    font-size: 32px;
    border-bottom: 0.1px solid rgba(84, 93, 92, 0.272);
    padding-bottom: 10px;
  }
`;

export default StyleCartSummary;
