import React from "react";
import { Card } from "react-bootstrap";
import DeleteButton from "./DeleteButton";
import BookImage from "./assets/book.png";

class BookItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
    };
  }

  removeSelf = (event) => {
    event.preventDefault();
    console.log(this.state.id);
    this.props.deleteBook(this.state.id);
  };

  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={BookImage} />
        <Card.Body>
          <Card.Title>Title: {this.props.title}</Card.Title>
          <Card.Text>
            Description: {this.props.description}
          </Card.Text>
          <Card.Text>
            Status: {this.props.status}
          </Card.Text>
          <DeleteButton removeSelf={this.removeSelf}/>
        </Card.Body>
      </Card>
    );
  }
}

export default BookItem;
