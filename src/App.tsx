import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import {Home} from "./home/home";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
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
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/destination">
            <div></div>
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
