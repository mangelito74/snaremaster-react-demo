import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import MainNavigation from "./MainNavigation";

import classes from "./RootLayout.module.css";

const RootLayout = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default RootLayout;
