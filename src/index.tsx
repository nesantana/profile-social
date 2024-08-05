import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UsersProvider } from "./Context/Users.context";
import { PostsProvider } from "./Context/Posts.context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <UsersProvider>
          <PostsProvider>
            <App />
          </PostsProvider>
        </UsersProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
