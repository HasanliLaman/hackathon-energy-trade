import SignInForm from "../../components/signinform";
import StyleSignIn from "./style";
import Container from "../../components/UI/Container";

const SignIn = () => {
  return (
    <StyleSignIn>
      <Container>
        <SignInForm />
      </Container>
    </StyleSignIn>
  );
};

export default SignIn;
