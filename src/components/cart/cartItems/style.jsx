import styled from "styled-components";

const StyleCartItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    background-color: white;
    border-radius: 4px;
    padding: 20px;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr auto;
    gap: 10px;
    font-weight: 500;
    font-size: 18px;
    align-items: center;
  }

  .offerBtn {
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

  .deleteBtn {
    margin-left: 20px;
    svg {
      width: 15px;
      height: 15px;
      path {
        fill: #909090;
        transition: all 0.3s;
      }
    }

    &:hover {
      svg {
        path {
          fill: var(--color-accent);
        }
      }
    }
  }
`;

export default StyleCartItems;
