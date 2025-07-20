import { Outlet } from "react-router-dom";


const HomeRoot = () => {
  return (
    <div>
      <div className="min-h-screen mx-auto p-1">
        <Outlet />
    </div>
    </div>
  );
};

export default HomeRoot;
