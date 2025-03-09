import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router";
import TodoList from "./TodoList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<TodoList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
