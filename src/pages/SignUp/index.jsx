import SignUpForm from "../../components/signupform";
import StyleSignUp from "./style";
import Container from "../../components/UI/Container";

const SignUp = () => {
  return (
    <StyleSignUp>
      <Container>
        <SignUpForm />
      </Container>
    </StyleSignUp>
  );
};

export default SignUp;
