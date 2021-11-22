import {Link, Outlet} from "react-router-dom";

export const Destination = () => {
  return (
    <div className="App">
      <nav>
        <ol>
          <li>
            <Link className="link" to={`/moon`}>
              moon
            </Link>
          </li>
          <li>
            <Link className="link" to={`/mars`}>
              mars
            </Link>
          </li>
          <li>
            <Link className="link" to={`/europe`}>
              europe
            </Link>
          </li>
          <li>
            <Link className="link" to={`/titan`}>
              titan
            </Link>
          </li>
          Link
        </ol>
      </nav>
      <Outlet />
    </div>
  );
};
