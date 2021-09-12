import React from "react";

class Profile extends React.Component {
  render() {
    return (
      <>
        <h1>Name: {this.props.name}</h1>
        <h1>Email: {this.props.email}</h1>
        <img src={this.props.pfp} alt="user profile" />
      </>
    );
  }
}

export default Profile;
