import React from "react";
import Form1 from "./Components/Form1/Form1.jsx";
import Form2 from "./Components/Form2/Form2.jsx";
import Form3 from "./Components/Form3/Form3.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Form1 />

      <Form2 />

      <Form3 /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={<Form2 />}></Route>
          <Route path="/sign-in" element={<Form3 />}></Route>
          <Route path="/log-in" element={<Form1 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
