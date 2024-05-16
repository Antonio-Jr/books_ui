import { BooksByTitle } from "./books"

export interface Categories {
  categoriesByName: CategoriesByName[]
}

interface CategoriesByName {
  name: string
  books: BooksByTitle[]
}