import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextProvider } from "../../../context/UserContext";

const Sidebar = () => {
  const { user } = useContext(ContextProvider);
  return (
    <div className="flex md:justify-start gap-8 justify-evenly md:flex-col flex-row md:py-5 *:h-8 *:w-8 items-center h-full">
      <Link to={"/dashboard"}>
        <img src="/icons8-bonds.svg" alt="" className="" />
      </Link>
      <Link to={"/dashboard"}>
        <img src="/icons8-home-50.png" alt="" className="" />
      </Link>
      <Link to={"/services"}>
        <img src="/icons8-wallet-50.png" alt="" />
      </Link>
      <Link to={"/add-new-transaction"}>
        <img src="/icons8-add-64.png" alt="" className="" />
      </Link>
      <Link to={"/profile"}>
        <img
          src={user?.photoURL || "/icons8-test-account-96.png"}
          alt=""
          className="rounded-full"
        />
      </Link>
    </div>
  );
};

export default Sidebar;
