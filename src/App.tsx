import { useContext, useEffect } from "react";
import RootLayout from "./components/Layout/RootLayout/RootLayout";
import Sidebar from "./components/shared/sidebar/Sidebar";
import { authenticateUser } from "./utils/userAuthentication";
import Cookies from "js-cookie";
import { ContextProvider } from "./context/UserContext";

const App = () => {
  const { setUser, setLoading } = useContext(ContextProvider);
  useEffect(() => {
    setLoading(true);
    const token = Cookies.get("token");
    const uid = Cookies.get("uid");

    if (token && uid) {
      authenticateUser(uid, token).then((data) => {
        setUser(data?.user);
      });
    }
    setLoading(false);
  }, []);

  return (
    <div className="flex  w-full justify-between relative h-screen overflow-hidden">
      <div className="md:w-[5rem] md:relative absolute bottom-0 w-full bg-violet-600 md:h-screen h-fit min-w-screen z-50">
        <Sidebar />
      </div>
      <div className="mx-auto lg:container overflow-x-hidden w-full">
        <RootLayout />
      </div>
    </div>
  );
};

export default App;
