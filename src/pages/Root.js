import {Outlet} from "react-router-dom";
import MainNavigations from "../componenets/MainNavigation";

const RootLayout = () => {
  return (
    <>
      <MainNavigations />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
