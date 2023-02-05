import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const Context = ({ children }) => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("Tesla");
  const [state, setState] = useState(9);

  const URL = `https://newsapi.org/v2/everything?q=${query}&apiKey=0d080d13836b4daa8ff82f78f2be173d&pageSize=${state}`;

  const newsAPI = async () => {
    try {
      const req = await fetch(URL);
      const resp = await req.json();
      const result = resp.articles;
      setData(result);
      // console.log(resp);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    newsAPI();
  }, [query, state]);

  return (
    <>
      <AppContext.Provider value={{ data, query, setQuery, state, setState }}>
        {children}
      </AppContext.Provider>
    </>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export default Context;
export { useGlobalContext };
