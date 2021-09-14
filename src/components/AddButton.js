import React from "react";
import {Card, Button} from 'react-bootstrap'

class AddButton extends React.Component {
  render() {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>Add To Collection</Card.Title>
            <Button onClick={this.props.openModal} variant="primary">Add A Book</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default AddButton;
