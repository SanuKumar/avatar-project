import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Login from "./components/Login/login";
import { Loading } from "./components/Loading";
import Todo from "./components/Todo/todo";
import "bootstrap/dist/css/bootstrap.min.css";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Avatar = lazy(() => import("./components/Avatar/avatar"));

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <FontAwesomeIcon icon={faCoffee} />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/Avatar">Avatar</Link>
        <Link to="/login">Login</Link>
        <Link to="/todo">Todo</Link>
      </Nav>
    </Navbar>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
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
          <Route path="/login" component={Login} />
          <Route path="/avatar" component={Avatar} />
          <Route path="/todo" component={Todo} />
        </Suspense>
      </Switch>
    </Router>
  );
};

export default App;
