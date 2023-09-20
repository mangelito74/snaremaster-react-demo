import { Link } from "react-router-dom";

import classes from "./HomePage.module.css"

const HomePage = () => {
  return (
    <div className={classes.home}>
      <h1>Welcome to SnareMaster!</h1>
      <h2>Your #1 snare store online.</h2>
      <p>
        <b>Note: </b>This is fake store only created as a React demo. None of
        the products can be bought here, and the pictures were found at &nbsp;
        <Link to="http://www.trumslagaren.se" target="_blank">
          www.trumslagaren.se
        </Link>
        .
      </p>
    </div>
  );
};

export default HomePage;
