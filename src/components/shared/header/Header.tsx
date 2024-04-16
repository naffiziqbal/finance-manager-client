import { useContext, useState } from "react";
import { ContextProvider } from "../../../context/UserContext";
import toast from "react-hot-toast";

const Header = () => {
  const [light, setLight] = useState(false);
  const { user, logout } = useContext(ContextProvider);

  const handleLogOut = () => {
    logout();
    toast("Logged Out Successfully");
    window.location.href = "/login";
  };
  return (
    <div className="flex w-full items-center h-fit mb-12">
      <img src="/icons8-bonds.svg" alt="logo" className="md:hidden h-14" />
      <section className="flex justify-between items-center  w-full gap-5">
        <div className="flex  w-full  h-fit">
          <input
            type="text"
            placeholder="Search Here..."
            onChange={() => toast("Search Functionality is not implemented")}
            className="px-3  bg-transparent w-full  border rounded-s outline-none  border-violet-600"
          />
          <button className="rounded-e bg-violet-600 ">
            <img src="/icons8-search.svg" alt="" className="h-10  p-2" />
          </button>
        </div>
        <div className="flex min-w-fit gap-3">
          <div onClick={() => setLight(!light)} className="">
            {!light ? (
              <img src="/icons8-sun.svg" className="h-8 w-8" alt="" />
            ) : (
              <img src="/icons8-moon-50.png" alt="" className="w-8 h-8" />
            )}
          </div>

          {user?._id ? (
            <button onClick={() => handleLogOut()}>
              <img src="/icons8-exit-50.png" alt="" className="w-8 h-8" />
            </button>
          ) : (
            <button onClick={() => handleLogOut()}>
              <img src="/icons8-enter-50.png" alt="" className="w-8 h-8" />
            </button>
          )}
          <img src="/icons8-test-account-96.png" alt="" className="w-8 h-8" />
        </div>
      </section>
    </div>
  );
};

export default Header;
