import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./BestBooks.css";
import axios from "axios";
// import Book from "./components/book";
import { Carousel } from "react-bootstrap";
import BookImage from "./components/assets/book.png";

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      booksArr: [],
    };
  }

  componentDidMount = () => {
    const url = `http://localhost:3001/books?email=${this.props.email}`;
    // const url = `https://ms-can-of-books-backend.herokuapp.com/books?email=${this.props.email};`

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
        <Jumbotron>
          <h1>My Favorite Books</h1>
          <p>This is a collection of my favorite books</p>
        <div id='carosuelContainer'>
          <Carousel>
            {this.state.booksArr.length > 0 &&
              this.state.booksArr.map((item) => {
                return (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={BookImage}
                      alt="slide"
                      // width= '400px'
                      height="400px"
                    />
                    <Carousel.Caption>
                      <h3>{item.title}</h3>
                      <p>
                        {item.description}
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
          </Carousel>
        </div>
        </Jumbotron>
      </>
    );
  }
}

export default MyFavoriteBooks;
