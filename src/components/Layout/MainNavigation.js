import { Fragment, useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import CartButton from "../Cart/CartButton";
import Button from "../UI/Button";
import ModalDialog from "../UI/ModalDialog";
import MessageBox from "../UI/MessageBox";

import AuthenticationContext from "../../store/context-api/authentication-context";
import useModal from "../../store/custom-hooks/use-modal";
import { useStore } from "../../store/custom-hooks/store";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const [logoutModalIsOpen, toggleLogoutModal] = useModal();
  const [messageModalIsOpen, toggleMessageModal] = useModal();
  const [message, setMessage] = useState(null);

  const [favoritesBadgeIsHighlighted, setFavoritesBadgeIsHighlighted] =
    useState(false);

  const authenticationContext = useContext(AuthenticationContext);

  const state = useStore()[0];
  const numberOfFavorites = state.favoriteIds.length;

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    setFavoritesBadgeIsHighlighted(true);

    const timer = setTimeout(() => {
      setFavoritesBadgeIsHighlighted(false);
    }, 300);

    //Cleanup function
    return () => {
      clearTimeout(timer);
    };
  }, [numberOfFavorites, firstRender]);

  const logoutHandler = () => {
    authenticationContext.onLogout();
    toggleLogoutModal();
    setMessage("You are now logged out!");
    toggleMessageModal();
  };

  const favoritesBadgeClasses = `${classes.badge} ${
    favoritesBadgeIsHighlighted ? classes.bump : ""
  }`;

  return (
    <Fragment>
      <header className={classes.header}>
        <Link to="/">
          <div className={classes.logo}>SnareMaster</div>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/products">Products</Link>
            </li>
            {authenticationContext.isLoggedIn && (
              <li>
                <Link to="/favorites">
                  <div className={classes.favorites}>
                    <span>Favorites</span>
                    <span className={favoritesBadgeClasses}>
                      {numberOfFavorites}
                    </span>
                  </div>
                </Link>
              </li>
            )}
            <li>
              <CartButton />
            </li>
            {!authenticationContext.isLoggedIn && (
              <li>
                <Button onClick={authenticationContext.showLoginForm}>
                  Login
                </Button>
              </li>
            )}
            {authenticationContext.isLoggedIn && (
              <li>
                <Button onClick={toggleLogoutModal}>Logout</Button>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <ModalDialog
        show={logoutModalIsOpen}
        title="Logout"
        acceptButtonText="Yes"
        acceptButtonOnClick={logoutHandler}
        hasCancelButton={true}
        cancelButtonText="No"
        cancelButtonOnClick={toggleLogoutModal}
      >
        Do you really want to logout?
      </ModalDialog>
      {messageModalIsOpen && (
        <MessageBox show={messageModalIsOpen} onClose={toggleMessageModal}>
          {message}
        </MessageBox>
      )}
    </Fragment>
  );
};

export default MainNavigation;
