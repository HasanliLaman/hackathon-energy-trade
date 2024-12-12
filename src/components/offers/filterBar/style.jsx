import styled from "styled-components";

const StyleFilterBar = styled.div`
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  button {
    background: var(--color-white);
    width: 100%;
    height: 43px;
    border-radius: 4px;

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

  .search {
    grid-column: 1/3;

    input {
      background: var(--color-white);
      outline: 0;
      border: 1px solid var(--color-white);
      width: 100%;
      font-size: 20px;
      color: #909090;
      padding: 6px 16px;
      transition: all 0.3s;
      border-radius: 4px;

      &:hover {
        border: 1px solid var(--color-accent);
      }

      &:focus {
        border: 1px solid var(--color-accent);
      }
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: auto auto 1fr;
    .search {
      grid-column: 3/4;
      display: flex;
      justify-content: flex-end;

      input {
        width: 300px;
      }
    }
    button {
      width: 43px;
    }
  }
`;

export default StyleFilterBar;
