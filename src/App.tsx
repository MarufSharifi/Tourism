import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import {Home} from "./home/home";
import {Destination} from "./destination/destination";
import Logo from "./assets/logo";
import "./App.css";

function App() {
  return (
    <Router>
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
                  <Link className="link" to="/destination/moon">
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
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/destination">
            <Destination />
          </Route>
          <Route exact path="/crew">
            <div></div>
          </Route>
          <Route exact path="/technology">
            <div></div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
