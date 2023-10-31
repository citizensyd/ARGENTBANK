import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/login/auth";
import Cookies from 'js-cookie';

/**
 * Nav Component - Provides the main navigation for the application.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 *
 * @returns {JSX.Element} A JSX element that represents the main navigation.
 */
const Nav = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated } = useSelector(state => state.auth);
    const { firstName, lastName } = useSelector(state => state.user);

    /**
     * Handles logout action by removing token and updating state.
     */
    const handleLogout = () => {
        Cookies.remove('token');
        dispatch(logout());
        navigate('/login');
    };

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
                {isAuthenticated ?
                    <a className="main-nav-item" href="./user">
                        <i className="fa fa-user-circle"></i>
                        &nbsp;{firstName} {lastName}
                    </a> :
                    null
                }
                {!isAuthenticated ?
                    <a className="main-nav-item" href="./login">
                        <i className="fa fa-user-circle"></i>&nbsp;Log In
                    </a> :
                    <button className="main-nav-item" onClick={handleLogout}>
                        <i className="fa fa-sign-out"></i>&nbsp;Log Out
                    </button>}
            </div>

        </nav>
    );
};

export default Nav;