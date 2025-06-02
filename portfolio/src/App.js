import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Home from "./Pages/Home";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="">
        <Home/>
        <Outlet />
      </main>
    </>
  );
}
