import StyleCheckout from "./style";
import Container from "../../components/UI/Container";
import CheckoutSummary from "../../components/checkoutsummary";

const Checkout = () => {
  return (
    <StyleCheckout>
      <Container>
        <CheckoutSummary />
      </Container>
    </StyleCheckout>
  );
};

export default Checkout;
