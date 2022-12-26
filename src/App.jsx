import react from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router/router";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider } from "react-photo-view";
import TokenProvider from "./context/TokenProvider";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <PhotoProvider>
        <TokenProvider>
          <Toaster />
          <RouterProvider router={router}></RouterProvider>
        </TokenProvider>
      </PhotoProvider>
    </div>
  );
}

export default App;
