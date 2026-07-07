import React,{useState} from 'react'

const Search = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <input
          type="text"
          placeholder="Search images..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-96 rounded-lg border border-gray-300 px-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    </>
  )
}

export default Search
