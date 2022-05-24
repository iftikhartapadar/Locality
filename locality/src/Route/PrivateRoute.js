import { Route, Redirect } from "react-router-dom";
import { Auth } from "../Auth/Auth";

export class PrivateRoute extends Route {
  constructor(props) {
    super(props);
    this.auth = new Auth();
  }
  render() {
    console.log("Attempting to access a private route");

    const user = this.auth.currentUser();

    if (user === null || user === undefined) {
      return <Redirect push to="/" />;
    }

    return <Route {...this.props} />;
  }
}
