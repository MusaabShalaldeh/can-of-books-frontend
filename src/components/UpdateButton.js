import React from "react";
import { Button } from "react-bootstrap";

class UpdateButton extends React.Component {
  render() {
    return (
      <>
        <Button onClick={this.props.showUpdateModal} variant="primary">
          Update
        </Button>
      </>
    );
  }
}

export default UpdateButton;
