import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ContextProvider } from "../../../context/UserContext";
import Navigation from "../../shared/navigator/Navigation";

const RootLayout = () => {
  const { user, loading } = useContext(ContextProvider);
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(user);
  if (!user?._id) {
    return (
      <div className="h-screen w-screen text-2xl flex justify-center items-center">
        <Link
          to={"/login"}
          className="font-bold text-violet-600 underline mx-2"
        >
          Login
        </Link>
        to View
      </div>
    );
  }
  return (
    <div className="w-full  py-3 md:mx-12 text-[#1f2c73]">
      {/* <Header /> */}
      <Navigation />
      <Outlet />
    </div>
  );
};

export default RootLayout;
