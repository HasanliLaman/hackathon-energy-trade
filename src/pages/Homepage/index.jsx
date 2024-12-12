import { useEffect } from "react";
import StyleHomePage from "./style";
import HomepageMain from "../../components/homepage";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Energy Trading";
  }, []);

  return (
    <StyleHomePage>
      <HomepageMain />
    </StyleHomePage>
  );
};

export default HomePage;
