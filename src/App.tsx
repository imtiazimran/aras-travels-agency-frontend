import { Outlet } from "react-router-dom";
import Navbar from "./components/Nav";

const App = () => {
  return (
    <div>
      <div className="z-50">
        <Navbar />
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
