import { useSelector, useDispatch } from "react-redux";
import { toggleEdit } from "../../features/user/userSlice";
import { changeUser } from "../../features/Api/api";
import { changeFirstname, changeLastname } from "../../features/user/userSlice";
import { useState } from "react";
import Cookies from "js-cookie";

const EditUserName = () => {
    let token = Cookies.get('token');
    const [newFirstName, setNewFirstName] = useState("");
    const [newLastName, setNewLastName] = useState("");
    const { firstName, lastName } = useSelector(state => state.user);
    const dispatch = useDispatch();


    const handleCancel = () => {
        dispatch(toggleEdit(false));
    };

    const handleFirstnameChange = (e) => {
        setNewFirstName(e.target.value);
    };

    const handleLastnameChange = (e) => {
        setNewLastName(e.target.value);
    };

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
        <div className="">
            <input type="text" onChange={handleFirstnameChange} placeholder={firstName} />
            <input type="text" onChange={handleLastnameChange} placeholder={lastName} />
            <button onClick={handleChangeFirstNameLastName}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    );
};
export default EditUserName;