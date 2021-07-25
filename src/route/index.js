import { Redirect, Route } from "react-router";
import { Switch } from "react-router-dom";
import AuthRoute from './auth';

const constructRoute = ({ component: Component, ...rest }) => {
  if (rest.isProtected) {
    return true ? <Route {...rest} render={(props) => <Component {...props} />}></Route>
      : <Redirect to="/auth" />
  }
  return <Route {...rest} render={(props) => <Component {...props} />}></Route>
}

const constructRoutes = (routes) => {
  return routes.map(({ isProtected, children, ...rest }) => {
    if (children.length) {
      return children.map(childRoute => (
        constructRoute({ ...childRoute, path: `${rest.path}${childRoute.path}` })
      ))
    } else {
      return constructRoute(isProtected, rest)
    }
  });
}

const routes = function () {
  const AllRoute = constructRoutes(AuthRoute)
  AllRoute.push(
    <Redirect to="/auth/signin" />
  )
  return (
    <Switch>
      {AllRoute}
    </Switch>
  )
}();

export default routes;

