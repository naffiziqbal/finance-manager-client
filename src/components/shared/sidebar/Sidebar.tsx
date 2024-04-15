import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex md:justify-start gap-8 justify-evenly md:flex-col flex-row md:py-5 *:h-8 *:w-8 items-center h-full">
      <Link to={"/dashboard"}>
        <img src="/icons8-bonds.svg" alt="" className="" />
      </Link>
      <Link to={"/dashboard"}>
        <img src="/public/icons8-home-50.png" alt="" className="" />
      </Link>
      <Link to={"/wallet"}>
        <img src="/public/icons8-wallet-50.png" alt="" />
      </Link>
      <Link to={"/add-new-transaction"}>
        <img src="/public/icons8-add-64.png" alt="" className="" />
      </Link>
      <Link to={"/profile"}>
        <img src="/public/icons8-test-account-96.png" alt="" className="" />
      </Link>
    </div>
  );
};

export default Sidebar;
