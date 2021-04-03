import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";

const Login = lazy(() => import("./pages/login"));
const Signup = lazy(() => import("./pages/signup"));
const NotFound = lazy(() => import("./pages/notfound.js"));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path={ROUTES.LOGIN} component={Login} />
          <Route exact path={ROUTES.SIGN_UP} component={Signup} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
