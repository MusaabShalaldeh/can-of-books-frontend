import React from "react";
import { Button } from "react-bootstrap";

class DeleteButton extends React.Component {
  render() {
    return (
      <>
        <Button onClick={this.props.removeSelf} variant="primary" id='removeButton'>
          Remove
        </Button>
      </>
    );
  }
}

export default DeleteButton;
