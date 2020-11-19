import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Loading } from "./components/Loading";
import Todo from "./components/Todo/todo";
import Login from "./components/Login/login";
import NotFound from "./components/notfound";
const Avatar = lazy(() => import("./components/Avatar/avatar"));

// https://reactrouter.com/web/api/NavLink

const Header = () => {
  return (
    <nav>
      <Navbar bg="dark" variant="dark">
        <NavLink to="/login">
          <FontAwesomeIcon icon={faCoffee} style={{ color: "white" }} />
        </NavLink>
        <Nav className="mr-auto" style={{ paddingLeft: "20px" }}>
          <div style={{ paddingLeft: "20px" }}>
            <NavLink
              activeClassName="navbar_link--active"
              className="navbar_link"
              to="/Avatar"
            >
              Avatar
            </NavLink>
          </div>
          <div style={{ paddingLeft: "20px" }}>
            <NavLink
              activeClassName="navbar_link--active"
              className="navbar_link"
              to="/login"
            >
              Login
            </NavLink>
          </div>
          <div style={{ paddingLeft: "20px" }}>
            <NavLink
              activeClassName="navbar_link--active"
              className="navbar_link"
              to="/todo"
            >
              Todo
            </NavLink>
          </div>
        </Nav>
      </Navbar>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <div>
            <Loading
              style={{
                width: "100%",
                height: "100vh",
                background: "#fff",
              }}
            />
          </div>
        }
      >
        <Header />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/avatar" component={Avatar} />
          <Route exact path="/todo" component={Todo} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
