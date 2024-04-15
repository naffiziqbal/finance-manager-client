import RootLayout from "./components/Layout/RootLayout/RootLayout";
import Sidebar from "./components/shared/sidebar/Sidebar";

const App = () => {
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
