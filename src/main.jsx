import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import About from "./Pages/About";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<App />}>
    <Route index element={<Home/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/about" element={<About/>}/>
  </Route>)
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
