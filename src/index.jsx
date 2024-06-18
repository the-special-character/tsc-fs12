import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Textinput from "./componemts/textinput";
import Test from "./componemts/test";

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById("app"));

const App = ({ id, label, placeholder }) => {
    
};

root.render(
  <div className="flex flex-col gap-4">
    <Textinput id="name" placeholder="enter name" label="Name" />
    <Textinput id="email" placeholder="enter email" label="Email" />
    <Textinput id="password" placeholder="enter password" label="Password" />
    <Test/>
  </div>

);
