import Home from "./components/Home";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BigReaders from "./components/BigReaders";
import AlharamAlMaki from "./components/AlharamAlMaki";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bigReaders" element={<BigReaders />} />
          <Route path="/alharam" element={<AlharamAlMaki />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
