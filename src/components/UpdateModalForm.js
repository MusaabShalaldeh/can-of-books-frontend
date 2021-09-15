import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

class UpdateModalForm extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.showUpdate} onHide={this.props.closeUpdateModal}>
          <Modal.Header closeButton>
            <Modal.Title>Update Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div id="formModalContainer">
              <Form onSubmit={this.props.submitUpdateForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Book Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="bookName"
                    defaultValue={this.props.nameHolder}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Book Description</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="bookdescription"
                    defaultValue={this.props.descHolder}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Status:</Form.Label>
                  <br/>
                  <select name='selectStatus' defaultValue={this.props.statusHolder}>
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
            <Button variant="secondary" onClick={this.props.closeUpdateModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default UpdateModalForm;