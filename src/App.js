import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './App.css';
import Navigation from "./navbar/Navigation";
import Login from "./component/Login";
import Home from "./component/Home";
import Logout from "./component/Logout";
import {useSelector} from "react-redux";

function App() {



  return (
      <Router>
        <div className="App">

          <Navigation/>

          <div className = "content">

            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
                <Route path="/logout" element={<Logout/>}/>


            </Routes>
          </div>
        </div>
      </Router>

              );
}

export default App;
