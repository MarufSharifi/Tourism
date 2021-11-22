import {Link, Outlet} from "react-router-dom";
import Logo from "../assets/logo";
import "./root.css";

export const Root = () => {
  return (
    <div className="root">
      <div className="header">
        <Logo className="logo" />
        <nav>
          <div className="headerLine" />
          <div className="navRight">
            <div className="lineOnNav" />
            <ol>
              <li>
                <Link className="link" to="/home">
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
      <Outlet />
    </div>
  );
};
