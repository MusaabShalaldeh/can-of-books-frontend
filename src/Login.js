import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './Login.css';

class Login extends React.Component {
  render() {
    const { isAuthenticated,loginWithRedirect } = this.props.auth0;
    return(
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>
          <button onClick={!isAuthenticated && loginWithRedirect}>Log in</button>
        </Card.Body>
      </Card>
    )
  }
}

export default withAuth0(Login);
