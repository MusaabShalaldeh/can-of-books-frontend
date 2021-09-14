import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

class ModalForm extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Book Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div id="formModalContainer">
              <Form onSubmit={this.props.submitForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Book Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="bookName"
                    placeholder="Name of your book."
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Book Description</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="bookdescription"
                    placeholder="Description of your book."
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Status:</Form.Label>
                  <br/>
                  <select name='selectStatus'>
                    <option value="Fun Read">Fun Read</option>
                    <option value="Life Changing">Life Changing</option>
                    <option value="Can't Live Without it">Can't Live Without it</option>
                  </select>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ModalForm;
