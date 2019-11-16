import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getBooksQuery = gql`
  {
    books {
      id
      name
      genre
      author {
        id
        name
        age
      }
    }
  }
`;

class BookList extends Component {
  displayBooks() {
    console.log(this.props);
    var data = this.props.data;
    if (data.loading) {
      return <div>Loading Books...</div>;
    } else {
      return data.books.map(book => {
        return <li key={book.id}>{book.name}</li>;
      });
    }
  }
  render() {
    return (
      <div>
        <ul id="book-list">{this.displayBooks()}</ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
