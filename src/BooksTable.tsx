import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS, GET_BOOKS, GET_CATEGORIES } from "./graphql/queries";
import { BooksByTitle } from "./graphql/types/books";

interface BooksTableProps {
  entity: string;
  search: string;
}

export const BooksTable = ({ entity, search }: BooksTableProps) => {
  let query = null;
  let books: BooksByTitle[] = [];

  if (entity === "author") query = GET_AUTHORS;
  else if (entity === "category") query = GET_CATEGORIES;
  else query = GET_BOOKS;

  const { loading, error, data } = useQuery(query, { variables: { search } });

  if (loading) return <div>Loading ...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <p>No data...</p>;

  const items = Object.values(data)[0] as any;

  if (entity === "author") {
    const booksArray = [].concat.apply([], items.map((c: any) => c.books));
    books = booksArray;
  } else if (entity === "category") {
    console.log(items)

    const booksArray = [].concat.apply([], items.map((c: any) => c.books));
    books = [...new Set(booksArray)];
  } else {
    books = items;
  }

  return (
    <Table className="w-full">
      <TableCaption>A list of books.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Author</TableHead>
          <TableHead>ISBN</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Type</TableHead>
          <TableHead className="text-right">Copies (In Use / Total)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {!books && (
          <TableRow>
            <TableCell className="font-medium text-left row-span-full">No data...</TableCell>
          </TableRow>
        )}
        {books &&
          books.map((book) => (
            <TableRow key={`${book.isbn}-${Math.random()}`}>
              <TableCell className="font-medium text-left">{book.title}</TableCell>
              <TableCell className="text-left">{book.author}</TableCell>
              <TableCell className="text-left">{book.isbn}</TableCell>
              <TableCell className="text-left">{book.category}</TableCell>
              <TableCell className="text-left">{book.type}</TableCell>
              <TableCell className="text-right">{`${book.copiesInUse} / ${book.totalCopies}`}</TableCell>
            </TableRow>
          ))}
      </TableBody>
      {/* <TableFooter>
      <TableRow>
        <TableCell colSpan={3}>Total</TableCell>
        <TableCell className="text-right">$2,500.00</TableCell>
      </TableRow>
    </TableFooter> */}
    </Table>
  );
};
