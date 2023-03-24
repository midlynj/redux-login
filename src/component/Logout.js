import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser} from "../feature/userSlice";
import {useNavigate} from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const user = useSelector(selectUser)


    const handleLogout = (e) => {
        e.preventDefault();

        dispatch(logout())
        navigate('/')
    }

    return (
        <div>
            hello {user.name}
            <button onClick={(e) =>handleLogout(e)}>
                Logout here
            </button>
        </div>
    )

}
export default Logout