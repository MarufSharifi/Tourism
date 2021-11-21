import {Route, Link, Routes} from "react-router-dom";
import {Home} from "./home/home";
import {Details} from "./destination/details";
import {Destination} from "./destination/destination";
import Logo from "./assets/logo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Logo className="logo" />
        <nav>
          <div className="headerLine" />
          <div className="navRight">
            <div className="lineOnNav" />
            <ol>
              <li>
                <Link className="link" to="/">
                  00 home
                </Link>
              </li>
              <li>
                <Link className="link" to="/destination">
                  01 destination
                </Link>
              </li>
              <li>
                <Link className="link" to="/crew">
                  02 crew
                </Link>
              </li>
              <li>
                <Link className="link" to="/technology">
                  03 technology
                </Link>
              </li>
            </ol>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />}>
          <Route path=":id" element={<Details />} />
        </Route>
        <Route path="/crew" element={<div />} />
        <Route path="/technology" element={<div />} />
      </Routes>
    </div>
  );
}

export default App;
