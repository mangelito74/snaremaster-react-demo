import { Fragment } from "react";

import MainNavigation from "../components/Layout/MainNavigation";

import classes from "./ErrorPage.module.css"

const ErrorPage = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>
        <h1>An error occurred!</h1>
        <p>Could not find this page!</p>
      </main>
    </Fragment>
  );
};

export default ErrorPage;
