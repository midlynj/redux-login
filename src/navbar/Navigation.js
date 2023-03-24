import {Link} from "react-router-dom";
import "./navbar.css"
import {useSelector} from "react-redux";
import {selectUser} from "../feature/userSlice";


const Navigation = () => {

    const user = useSelector(selectUser)

    return (
        <nav className= "navbar navbar-default navbar-fixed-top navbar-shrink" style={{
            padding:"15px"
        }}>

            <div  className= "links">
                <Link to="/" style={{
                    float:"left"
                }}>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                { user ? (
                // <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                // <Link to="/parent">parent</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                // <Link to="/login">Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <>
                    <Link to="/logout">Logout

                </Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/profile">Profile</Link>

                    </>
                    )
                : (
                <>
                <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
                    <Link to="/login">Login</Link>



                        </>

)}
                {/*<Link to="/user">user</Link>&nbsp;&nbsp;&nbsp;&nbsp;*/}



            </div>
        </nav>

    )

}
export default Navigation