import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Textinput from "./componemts/textinput";
import Test from "./componemts/test";
import ToDo from "./Todo";

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById("app"));

const App = ({ id, label, placeholder }) => {

};

root.render(
  <ToDo />
);
