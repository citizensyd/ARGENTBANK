import { useSelector, useDispatch } from "react-redux";
import { toggleEdit, changeFirstname, changeLastname } from "../../features/user/userSlice";
import { changeUser } from "../../features/Api/api";
import { useState } from "react";
import Cookies from "js-cookie";
import { StyledEdit } from "./index.styles"

/**
 * EditUserName - Component for editing user's first and last name
 *
 * Utilizes Redux to get and update first and last name
 * Uses cookies for authentication token management
 * 
 * @returns {JSX.Element} JSX element for the edit form
 */
const EditUserName = () => {
    let token = Cookies.get('token');
    const [newFirstName, setNewFirstName] = useState("");
    const [newLastName, setNewLastName] = useState("");
    const { firstName, lastName } = useSelector(state => state.user);
    const dispatch = useDispatch();

    /**
     * handleCancel - Closes the edit form
     */
    const handleCancel = () => {
        dispatch(toggleEdit(false));
    };

    /**
     * handleFirstnameChange - Updates first name
     * 
     * @param {Event} e - Input event
     */
    const handleFirstnameChange = (e) => {
        setNewFirstName(e.target.value);
    };

    /**
     * handleLastnameChange - Updates last name
     * 
     * @param {Event} e - Input event
     */
    const handleLastnameChange = (e) => {
        setNewLastName(e.target.value);
    };

    /**
     * handleChangeFirstNameLastName - Changes first and last name in Redux and sends it to the API
     */
    const handleChangeFirstNameLastName = async () => {
        try {
            const response = await dispatch(changeUser({ token, "firstName": newFirstName, "lastName": newLastName }));
            if (response) {
                dispatch(changeFirstname(response.payload.body.firstName));
                dispatch(changeLastname(response.payload.body.lastName));
                dispatch(toggleEdit(false));
            }
        } catch (error) {
            console.log("error");
        }
        token = null;
    }

    return (
        <StyledEdit>
            <div>
                <input type="text" onChange={handleFirstnameChange} placeholder={firstName} />
                <button onClick={handleChangeFirstNameLastName}>Save</button>
            </div>
            <div>
                <input type="text" onChange={handleLastnameChange} placeholder={lastName} />
                <button onClick={handleCancel}>Cancel</button>
            </div>
        </StyledEdit>
    );
};

export default EditUserName;
