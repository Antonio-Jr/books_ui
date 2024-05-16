export interface Books {
  booksByTitle: BooksByTitle[]
}

export interface BooksByTitle {
  title: string;
  author: string;
  type: string;
  isbn: string;
  category: string;
  status: string;
  totalCopies: number;
  copiesInUse: number;
}
