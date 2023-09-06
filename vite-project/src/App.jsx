import "./App.css";
import Word from "./components/Word";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Search from "./components/Search";
import C404 from "./components/C404";
import PageOne from "./pages/PageOne";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/word/:search" element={<Word />}></Route>
          <Route path="/word" element={<Word />}></Route>
          <Route path="/C404" element={<C404 />}></Route>
          <Route path="/" element={<Search />} />
          <Route path="/home" element={<PageOne />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
