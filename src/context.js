import { createContext, useEffect, useState } from "react";

export const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}
`;

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("titanic");

  const getMovies = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setMovies(data.Search);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  useEffect(() => {
    let searchTimer=setTimeout(()=>{
      setTimeout(() => {
        getMovies(`${API_URL}&s=${query}`);
      }, 1000);
    })
    return ()=> clearTimeout(searchTimer);

  }, [query]);

  return (
    <AppContext.Provider value={{ movies, setQuery, query }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
