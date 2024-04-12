import { Outlet } from "react-router-dom";
import Header from "../../shared/header/Header";
import Navigation from "../../shared/navigator/Navigation";

const RootLayout = () => {
  return (
    <div className="w-full  py-3 md:mx-12 px-2 text-[#1f2c73]">
      <Header />
      <Navigation />
      <Outlet />
    </div>
  );
};

export default RootLayout;
