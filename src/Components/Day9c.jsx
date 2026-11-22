import { useState } from "react";

const SearchArray = () => {
  const [search, setSearch] = useState("");

  const names = ["Harshita", "Priyanka", "Nikk", "Nikita"];

  const searchNames = names.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <h2>Search Your Name</h2>

      <input
        type="text"
        placeholder="search Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {searchNames.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </>
  );
};

export default SearchArray;
