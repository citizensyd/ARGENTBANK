import Nav from "../../components/Nav/index";
import Main from "../../components/Main";
import Login from "../../components/Login";
import Footer from "../../components/Footer";

/**
 * SignIn Component.
 *
 * @returns {JSX.Element} Rendered SignIn component.
 */
const SignIn = () => {
  return (
    <>
      <Nav />
      <Main className="main bg-dark">
        <Login />
      </Main>
      <Footer />
    </>
  );
};

export default SignIn;
