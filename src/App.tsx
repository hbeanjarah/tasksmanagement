import React from "react";
import { BrowserRouter } from "react-router-dom";
import RouterPath from "./routes";

function App() {
  return (
    <BrowserRouter>
      <RouterPath />
    </BrowserRouter>
  );
}

export default App;
