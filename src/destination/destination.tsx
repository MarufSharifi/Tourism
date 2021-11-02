import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import {Details} from "./details";

export const Destination = () => {
  const {path, url} = useRouteMatch();

  return (
    <Router>
      <div className="App">
        <nav>
          <ol>
            <li>
              <Link className="link" to={`${url}/moon`}>
                moon
              </Link>
            </li>
            <li>
              <Link className="link" to={`${url}/mars`}>
                mars
              </Link>
            </li>
            <li>
              <Link className="link" to={`${url}/europe`}>
                europe
              </Link>
            </li>
            <li>
              <Link className="link" to={`${url}/titan`}>
                titan
              </Link>
            </li>
          </ol>
        </nav>
      </div>
      <Switch>
        <Route path={`${path}/destination`}>
          <Details />
        </Route>
      </Switch>
    </Router>
  );
};
