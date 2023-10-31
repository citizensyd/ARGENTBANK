import { useSelector, useDispatch } from "react-redux";
import EditUserName from "../EditUserName/index";
import { toggleEdit } from "../../features/user/userSlice";

/**
 * Header Component - Displays the header with a welcome message and an edit option.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * 
 * @returns {JSX.Element} A JSX element representing the header section.
 */
const Header = (props) => {
    const dispatch = useDispatch();
    
    // Retrieve the user details and the showEdit flag from the Redux store
    const { firstName, lastName, showEdit } = useSelector(state => state.user);

    /**
     * Handles the edit button click event to toggle the edit mode.
     */
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
