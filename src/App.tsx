import "./App.css";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Input } from "./components/ui/input";
import { BooksTable } from "./BooksTable";

function App() {
  const [selected, setSelected] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex flex-col w-full items-center justify-center gap-2">
      <h1>Books UI</h1>
      <Select value={selected} onValueChange={(value) => setSelected(value)}>
        <SelectTrigger className="rounded-md border border-slate-500">
          <SelectValue className="rounded-md" placeholder="Search by" />
        </SelectTrigger>
        <SelectContent className="shadow-sm bg-slate-50 border border-slate-500 dark:bg-zinc-900">
          <SelectItem value="title">Title</SelectItem>
          <SelectItem value="author">Author</SelectItem>
          <SelectItem value="category">Category</SelectItem>
        </SelectContent>
      </Select>

      <Input
        className="w-full rounded-md border border-slate-500"
        type="text"
        placeholder="Search"
        onChange={(e) => {
          if (e.target.value.length >= 3) setSearchTerm(e.target.value);
          if(e.target.value.length === 0) setSearchTerm("")
        }}
      />

      <BooksTable entity={selected} search={searchTerm} />
    </div>
  );
}

export default App;
