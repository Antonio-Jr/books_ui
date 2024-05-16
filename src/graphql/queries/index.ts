import { TypedDocumentNode, gql } from "@apollo/client";
import { Books } from "../types/books";
import { Authors } from "../types/authors";
import { Categories } from "../types/categories";

const GET_BOOKS: TypedDocumentNode<Books> = gql`
  query ($search: String!) {
    booksByTitle(title: $search) {
      title
      author
      type
      isbn
      category
      status
      totalCopies
      copiesInUse
    }
  }
`;

const GET_AUTHORS: TypedDocumentNode<Authors> = gql`
  query ($search: String!) {
    authorsByName(name: $search) {
      books {
        title
        author
        type
        isbn
        category
        status
        totalCopies
        copiesInUse
      }
    }
  }
`;

const GET_CATEGORIES: TypedDocumentNode<Categories> = gql`
  query ($search: String!) {
    categoriesByName(name: $search) {
      books {
        title
        author
        type
        isbn
        category
        status
        totalCopies
        copiesInUse
      }
    }
  }
`;

export { GET_BOOKS, GET_AUTHORS, GET_CATEGORIES };
