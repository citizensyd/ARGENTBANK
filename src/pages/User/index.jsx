import Nav from "../../components/Nav/index"
import Main from "../../components/Main";
import Header from "../../components/Header";
import Account from "../../components/Account";
import Footer from "../../components/Footer";

const User = () => {

    return (
        <>
            <Nav>
                <a className="main-nav-item" href="./user">
                    <i className="fa fa-user-circle"></i>
                    &nbsp;Tony
                </a>
            </Nav>
            <Main className="main bg-dark">
                <Header />
                <h2 class="sr-only">Accounts</h2>
                <Account />
                <Account />
                <Account />
            </Main>
            <Footer />
        </>
    );
};

export default User;