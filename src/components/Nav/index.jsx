import logo from "../../assets/logo.png"

const Nav = (props) => {
    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="./">
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
                {props.children}
                <a className="main-nav-item" href="./login">
                    <i className="fa fa-user-circle"></i>
                    &nbsp;Sign In
                </a>
            </div>
        </nav>
    );
};

export default Nav;