import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import RootLayout from "./components/Layout/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import FavoritesPage from "./pages/FavoritesPage";
import LoginForm from "./components/Authentication/LoginForm";

import AuthenticationContext from "./store/context-api/authentication-context";
import configureFavoritesStore from "./store/custom-hooks/favorite-ids-store";
import useModal from "./store/custom-hooks/use-modal";
import { uiActions } from "./store/redux/ui-slice";

import CartForm from "./components/Cart/CartForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, // index = true sets this to default route of parent (i.e. "/")
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetailsPage /> },
      { path: "favorites", element: <FavoritesPage /> },
    ],
  },
]);

configureFavoritesStore();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [loginModalIsOpen, toggleLoginModal] = useModal();

  const dispatch = useDispatch();
  const cartModalIsOpen = useSelector((state) => state.uiReducer.cartIsVisible);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const cartAcceptHandler = () => {
    alert("Thank you for you order!");
  };

  const toggleCartModal = () => {
    dispatch(uiActions.toggleCartIsVisible());
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        showLoginForm: toggleLoginModal,
      }}
    >
      <LoginForm
        show={loginModalIsOpen}
        acceptButtonOnClick={loginHandler}
        cancelButtonOnClick={toggleLoginModal}
      />

      <CartForm
        show={cartModalIsOpen}
        acceptButtonOnClick={cartAcceptHandler}
        cancelButtonOnClick={toggleCartModal}
      />

      <RouterProvider router={router} />
    </AuthenticationContext.Provider>
  );
}

export default App;
