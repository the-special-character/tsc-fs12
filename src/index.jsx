import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import TextInput from "./components/textInput";
import Test from "./components/test";

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById("app"));

root.render(
  <div className="flex flex-col gap-4">
    <TextInput id="name" placeholder="enter name" label="Name" />
    <TextInput id="email" placeholder="enter Email" label="Email" />
    <TextInput id="password" placeholder="enter Password" label="Password" />
    <Test />
  </div>
);
