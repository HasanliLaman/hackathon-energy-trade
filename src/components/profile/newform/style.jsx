import styled from "styled-components";

const StyleNewForm = styled.div`
  .main {
    background: var(--color-homepage);
    text-align: center;

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
      margin-bottom: 20px;
    }

    h3 {
      font-size: 20px;
      font-weight: 500;
    }

    .buttons {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;

      .cancelBtn {
        background: var(--color-white);
        border: 1px solid var(--color-accent);
        color: var(--color-accent);
      }
    }

    input,
    select {
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

    @media (min-width: 768px) {
      h2 {
        font-size: 35px;
      }
    }
  }
`;

export default StyleNewForm;
