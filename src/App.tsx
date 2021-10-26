import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import {Home} from "./home/home";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/destination">DESTINATION</Link>
            </li>
            <li>
              <Link to="/crew">CREW</Link>
            </li>
            <li>
              <Link to="/technology">TECHNOLOGY</Link>
            </li>
          </ul>
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
