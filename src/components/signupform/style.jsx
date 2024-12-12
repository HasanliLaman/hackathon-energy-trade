import styled from "styled-components";

const StyleSignUpForm = styled.div`
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
    padding: 8px 24px;
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

  input {
    background: var(--color-white);
    outline: 0;
    border: 1px solid var(--color-white);
    width: 100%;
    font-size: 20px;
    color: #909090;
    padding: 6px 16px;
    transition: all 0.3s;

    &:hover {
      border: 1px solid var(--color-accent);
    }

    &:focus {
      border: 1px solid var(--color-accent);
    }
  }

  form {
    margin: 25px 0 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 5px;

    p {
      text-align: start;
      font-size: 18px;
      color: #ab3636;
    }
  }

  .no-account {
    font-size: 18px;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 35px;
    }
  }
`;

export default StyleSignUpForm;
