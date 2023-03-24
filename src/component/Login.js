import {useState} from "react";
import {useDispatch} from "react-redux";
import {login} from "../feature/userSlice";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")

    const navigate = useNavigate()

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(login({
             name:name,
            email: email,
            password: password,
            loggedIn: true
        }))
        navigate('/')

    }


    return (
        <div className={"login"}>
            Login
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type="submit">
                    Submit
                </button>

            </form>


        </div>
    )
}
export default Login