import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";
import { withAuth0 } from "@auth0/auth0-react";

class Header extends React.Component {
  render() {
    const { isAuthenticated, logout } = this.props.auth0;
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Link to="/">Home</Link>
        {isAuthenticated && <Link to="/profile">Profile</Link>}
        {isAuthenticated && (
          <>
            <button
              onClick={() => {
                logout({ returnTo: window.location.origin });
              }}
            >
              Log out
            </button>
          </>
        )}
      </Navbar>
    );
  }
}

export default withAuth0(Header);
