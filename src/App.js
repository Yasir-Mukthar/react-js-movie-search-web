import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { SingleMovie } from './SingleMovie';
import { Error } from './Error';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<SingleMovie />} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
