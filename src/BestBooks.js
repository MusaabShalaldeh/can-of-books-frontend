import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./BestBooks.css";
import axios from "axios";
// import Book from "./components/book";
import AddButton from "./components/AddButton";
import {Row} from 'react-bootstrap';
import ModalForm from "./components/ModalForm";
import UpdateModalForm from "./components/UpdateModalForm";
import BookItem from "./components/BookItem";

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      booksArr: [],
      show: false,
      showUpdate: false,
      id: '',
      titleHolder: 't',
      descHolder: 'tt',
      statusHolder: "Can't Live Without it",
      email: ''
    };
  }

  submitForm = (event) => {
    event.preventDefault();
    this.closeModal();

    const book = {
      title: event.target.bookName.value,
      description: event.target.bookdescription.value,
      status: event.target.selectStatus.value,
      email: this.props.email,
    };

    // const url = `http://localhost:3001/addBooks`;
    const url = `https://ms-can-of-books-backend.herokuapp.com/addBooks`;
    axios
      .post(url, book)
      .then((result) => {
        this.setState({
          booksArr: result.data,
        });
      })
      .catch((err) => {
        console.log("faced an error while adding a book.");
      });
  };

  deleteBook = (id) => {
    // const url = `http://localhost:3001/deleteBook/${id}?email=${this.props.email}`;
    const url = `https://ms-can-of-books-backend.herokuapp.com/deleteBook/${id}?email=${this.props.email}`;

    axios
      .delete(url)
      .then((result) => {
        this.setState({
          booksArr: result.data,
        });
      })
      .catch((err) => {
        console.log("an error was found when attempting to delete this book");
      });
  };

  closeModal = () => {
    this.setState({
      show: false,
    });
  };
  openModal = () => {
    this.setState({
      show: true,
    });
  };
  closeUpdateModal = () => {
    this.setState({
      showUpdate: false,
    });
  };
  openUpdateModal = (obj) => {
    this.setState({
      showUpdate: true,
      id: obj.id,
      titleHolder: obj.title,
      descHolder: obj.description,
      statusHolder: obj.status,
      email: obj.email
    });
  };
  submitUpdateForm=(event)=>{
    event.preventDefault();
    //  const url = `http://localhost:3001/updateBook/${this.state.id}?email=${this.state.email}`;
    const url = `https://ms-can-of-books-backend.herokuapp.com/updateBook/${this.state.id}?email=${this.state.email}`;
    const obj={
      title: event.target.bookName.value,
      description: event.target.bookdescription.value,
      status: event.target.selectStatus.value
    }
    axios
      .put(url, obj)
      .then((result) => {
        this.setState({
          booksArr: result.data,
        });
      })
      .catch((err) => {
        console.log("an error was found when attempting to delete this book");
      });

    this.setState({
      showUpdate: false
    })
  }
  componentDidMount = () => {
    // const url = `http://localhost:3001/books?email=${this.props.email}`;
    const url = `https://ms-can-of-books-backend.herokuapp.com/books?email=${this.props.email}`;

    axios
      .get(url)
      .then((result) => {
        // console.log(result.data);
        this.setState({
          booksArr: result.data,
        });
        // console.log(this.state.booksArr);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <ModalForm
          show={this.state.show}
          handleClose={this.closeModal}
          submitForm={this.submitForm}
        />
        <UpdateModalForm 
        showUpdate={this.state.showUpdate} 
        closeUpdateModal={this.closeUpdateModal}
        nameHolder={this.state.titleHolder}
        descHolder={this.state.descHolder}
        statusHolder={this.state.statusHolder}
        submitUpdateForm={this.submitUpdateForm}
        />
        <Jumbotron>
          <h1>My Favorite Books</h1>
          <p>This is a collection of my favorite books</p>
        <AddButton openModal={this.openModal} />
        <Row id="booksRow">
            {this.state.booksArr.length > 0 &&
              this.state.booksArr.map((item) => {
                return (
                  <BookItem
                    title={item.title}
                    description={item.description}
                    status={item.status}
                    item={item}
                    deleteBook={this.deleteBook}
                    openUpdateModal={this.openUpdateModal}
                  />
                );
              })}
          </Row>
        </Jumbotron>
      </>
    );
  }
}

export default MyFavoriteBooks;
