import styled from "styled-components";

const StyleFilter = styled.div`
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
      background-color: transparent;
      padding: 0;
      transition: all 0.3s;
      cursor: pointer;
    }

    select,
    option,
    input {
      width: 100%;
      outline: 0;
      border: 0;
    }
  }

  @media (min-width: 768px) {
    ul {
      width: 220px;
    }
  }
`;

export default StyleFilter;
