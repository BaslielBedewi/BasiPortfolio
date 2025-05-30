import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Work from "../Pages/Work";
import Contact from "../Pages/Contact";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/work", element: <Work /> },
  { path: "/contact", element: <Contact /> },
]);

export default router;
