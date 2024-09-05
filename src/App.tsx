import { Outlet } from "react-router-dom";
import Navbar from "./component/Nav";

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
