import styled from "styled-components";

const StyleUserOffers = styled.section`
  background-color: var(--color-white);
  border-radius: 4px;
  font-size: 18px;
  margin-bottom: 60px;
  padding: 30px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  li {
    background-color: #f4f3ef;
    border-radius: 4px;
    padding: 10px;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr auto;
    gap: 10px;
    font-weight: 500;
    font-size: 18px;
    align-items: center;
    text-transform: capitalize;
  }
`;

export default StyleUserOffers;
