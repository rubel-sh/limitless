import react from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router/router";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider } from "react-photo-view";

function App() {
  return (
    <div className="App">
      <PhotoProvider>
        <RouterProvider router={router}></RouterProvider>
      </PhotoProvider>
    </div>
  );
}

export default App;
