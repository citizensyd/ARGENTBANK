import Nav from "../../components/Nav/index";
import Main from "../../components/Main";
import Header from "../../components/Header";
import Account from "../../components/Account";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from "../../features/Api/api";
import { changeFirstname, changeLastname } from "../../features/user/userSlice";
import Cookies from 'js-cookie';

/**
 * User Component - Represents the User view in the application.
 *
 * @returns {JSX.Element} Rendered User component.
 */
const User = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Pulling firstName and lastName from Redux store
    const { firstName, lastName } = useSelector(state => state.user);

    /**
     * UseEffect to fetch user data and populate Redux store.
     */
    useEffect(() => {
        const fetchUserApi = async () => {
            let token = Cookies.get('token');
            try {
                const response = await dispatch(fetchUser({ token }));
                dispatch(changeFirstname(response.payload.body.firstName));
                dispatch(changeLastname(response.payload.body.lastName));
                return response;
            } catch (error) {
                console.error('An error occurred:', error);
                navigate('/login');
            }
            token = null
        };

        fetchUserApi();
    }, [dispatch, navigate]);

    const transactions = [
        { type: "Checking", id: 8349, amount: "2,082.79", statut: "Available" },
        { type: "Saving", id: 6712, amount: "10,928.42", statut: "Available" },
        { type: "Credit Card", id: 8347, amount: "183.30", statut: "Current" }
    ];

    return (
        <>
            <Nav>
                <a className="main-nav-item" href="./user">
                    <i className="fa fa-user-circle"></i>
                    &nbsp;{firstName} {lastName}
                </a>
            </Nav>
            <Main className="main bg-dark">
                <Header />
                <h2 className="sr-only">Accounts</h2>
                {transactions.map((transaction, index) => <Account key={transaction.id} {...transaction} />)}
            </Main>
            <Footer />
        </>
    );
};

export default User;
