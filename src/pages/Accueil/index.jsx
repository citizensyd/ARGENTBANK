import Nav from "../../components/Nav/index"
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import FeatureItem from "../../components/FeatureItem";
import Main from "../../components/Main";

import chatImage from "../../assets/icon-chat.png";
import moneyImage from "../../assets/icon-money.png";
import securityImage from "../../assets/icon-security.png";
import Footer from "../../components/Footer";

const Accueil = () => {

  const chat = {
    image: chatImage,
    alt: "Chat Icon",
    title: "You are our #1 priority",
    text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
  }
  const money = {
    image: moneyImage,
    alt: "Money Icon",
    title: "More savings means higher rates",
    text: "The more you save with us, the higher your interest rate will be!"
  }
  const security = {
    image: securityImage,
    alt: "Security Icon",
    title: "Security you can trust",
    text: "We use top of the line encryption to make sure your data and money is always safe."
  }
  return (
    <>
      <Nav />
      <Main>
        <Hero />
        <Features>
          <FeatureItem {...chat} />
          <FeatureItem {...money} />
          <FeatureItem {...security} />
        </Features>
      </Main>
      <Footer />
    </>
  );
};

export default Accueil;
