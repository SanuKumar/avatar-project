import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login/login";
import { Loading } from "./components/Loading";
const Avatar = lazy(() => import("./components/Avatar/avatar"));

const App = () => {
  return (
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
      <Login />
      <Avatar />
    </Suspense>
  );
};

export default App;
