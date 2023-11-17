import React from "react";
import ReactDOMClient from "react-dom/client";
import { UserLogin } from "./screens/UserLogin";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<UserLogin />);
