import React from "react";
import { Card } from "react-bootstrap";
import DeleteButton from "./DeleteButton";
import BookImage from "./assets/book.png";
import UpdateButton from "./UpdateButton";

class BookItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.item._id,
      title: this.props.item.title,
      description: this.props.item.description,
      status: this.props.item.status,
      email: this.props.item.email
    };
  }

  removeSelf = (event) => {
    event.preventDefault();
    console.log(this.state.id);
    this.props.deleteBook(this.state.id);
  };
  
  showUpdateModal = (event)=>{
    event.preventDefault();
    console.log(this.state)
    const obj={
      id: this.state.id,
      title: this.state.title,
      description: this.state.description,
      status: this.state.status,
      email: this.state.email
    }
    this.props.openUpdateModal(obj);
  }

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
          <UpdateButton showUpdateModal={this.showUpdateModal} />
        </Card.Body>
      </Card>
    );
  }
}

export default BookItem;
