import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginToken } from '../../features/Api/api';
import Cookies from 'js-cookie';

const Login = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { isAuthenticated } = useSelector(state => state.auth);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/profile')
        }
    }, [isAuthenticated, navigate]);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        setError(null);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await dispatch(loginToken({ 'email': userName, 'password': password }));
            if (response.payload.body.token) {
                Cookies.set('token', response.payload.body.token);
                setUsername("");
                setPassword("");
                navigate('/profile');
            }
        } catch (error) {
            setError('User ou Pass invalide');
        }
    };

    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Log In</h1>
            <form>
                <div className="input-wrapper">
                    <label
                        htmlFor="username">
                        Username{error && <span style={{ color: 'red' }}> {error}</span>}
                    </label>

                    <input
                        type="text"
                        id="username"
                        value={userName}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button className="sign-in-button" onClick={handleSubmit}>Sign In</button>
            </form>
        </section>
    );
};

export default Login;
