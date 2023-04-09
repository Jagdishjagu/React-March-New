import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import Navbar from "./Navbar/Navbar";
import Home from "./Components/Home";
import Counter from "./Components/Counter";
import Message from "./Components/Message";
import Redux from "./Components/Redux";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="counter" element={<Counter />} />
            <Route path="message" element={<Message />} />
            <Route path="redux" element={<Redux />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
