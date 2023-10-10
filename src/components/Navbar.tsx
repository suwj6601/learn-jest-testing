import React from "react";
import { User } from "../model/Model";
import { Link } from "react-router-dom";

export class Navbar extends React.Component<{
  user: User | undefined;
}> {
  render() {
    let loginLogOut: any;
    if (this.props.user) {
      loginLogOut = (
        <Link to="/logout" style={{ float: "right" }}>
          {this.props.user.userName}
        </Link>
      );
    } else {
      loginLogOut = (
        <Link data-testid="login-link" to="/login" style={{ float: "right" }}>
          Login
        </Link>
      );
    }

    return (
      <div className="navbar">
        <Link to="/" data-testid="home-link">
          Home
        </Link>
        <Link to="/profile" data-testid="profile-link">
          Profile
        </Link>
        <Link to="/spaces" data-testid="spaces-link">
          Spaces
        </Link>
        {loginLogOut}
      </div>
    );
  }
}
