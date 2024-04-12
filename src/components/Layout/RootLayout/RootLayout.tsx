import { useState } from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const [light, setLight] = useState(false);
  return (
    <div className="w-full  py-3 md:mx-12 px-2 ">
      <div className="flex w-full items-center h-fit">
        <img src="/icons8-bonds.svg" alt="logo" className="md:hidden h-14" />
        <section className="flex justify-between items-center  w-full gap-5">
          <div className="flex  w-full  h-fit">
            <input
              type="text"
              placeholder="Search Here..."
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
            <img src="/icons8-bell-50.png" alt="" className="w-8 h-8" />
            <img src="/icons8-test-account-96.png" alt="" className="w-8 h-8" />
          </div>
        </section>
      </div>
      <Outlet />
    </div>
  );
};

export default RootLayout;
