import { BooksByTitle } from "./books"

export interface Authors {
  authorsByName: AuthorsByName[]
}

interface AuthorsByName {
  firstName: string
  lastName: string
  books: BooksByTitle[]
}