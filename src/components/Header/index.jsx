import { useSelector, useDispatch } from "react-redux";
import EditUserName from "../EditUserName/index";
import { toggleEdit } from "../../features/user/userSlice";

const Header = (props) => {
    const dispatch = useDispatch();
    const { firstName, lastName, showEdit } = useSelector(state => state.user);

    const handleEdit = () => {
        dispatch(toggleEdit(true));
    };

    return (
        <div className="header">
            <h1>Welcome back<br />{firstName} {lastName}!</h1>
            {showEdit ? <EditUserName /> : <button className="edit-button" onClick={handleEdit}>Edit Name</button>}
        </div>
    );
};

export default Header;
