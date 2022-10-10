import { useGlobalContext } from "../context/Context";

const Search = () => {
  const { query, setQuery } = useGlobalContext();

  return (
    <div className="flex flex-center">
      <input
        type="text"
        placeholder="search news"
        className=" p-0 w-full mr-32 ml-32 sm:w-28 text-neutral-500  border-none rounded-sm pl-2 sm:mr-0 sm:ml-0"
        onChange={(e)=>setQuery(e.target.value)}
        value={query}
     />
    </div>
  );
};

export default Search;
