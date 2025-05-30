import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Home from "./Pages/Home";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="p-4">
        <Home/>
        <Outlet />
      </main>
    </>
  );
}
