import RootLayout from "./components/Layout/RootLayout/RootLayout";
import Sidebar from "./components/shared/sidebar/Sidebar";

const App = () => {
  return (
    <div className="flex  w-full justify-between">
      <div className="md:w-[5rem] md:relative absolute bottom-0 w-full bg-violet-600 md:h-screen h-fit">
        <Sidebar />
      </div>
      <RootLayout />
    </div>
  );
};

export default App;
