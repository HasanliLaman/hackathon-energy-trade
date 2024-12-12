import styled from "styled-components";

const StyleSort = styled.div`
  position: relative;

  ul {
    display: flex;
    background-color: var(--color-white);
    flex-direction: column;
    padding: 20px;
    gap: 10px;
    position: absolute;
    top: 120%;
    left: 0;
    right: 0;

    li {
      background-color: var(--color-white);
      padding: 0;
      transition: all 0.3s;
      cursor: pointer;

      &:hover {
        color: var(--color-accent);
      }
    }
  }

  @media (min-width: 768px) {
    ul {
      width: 180px;
    }
  }
`;

export default StyleSort;
