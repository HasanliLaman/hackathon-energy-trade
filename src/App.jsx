import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./assets/style/GlobalStyle";
import HomePage from "./pages/Homepage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ProtectedRoute from "./components/auth/ProtectedAuth";
import "react-toastify/dist/ReactToastify.css";
import Offers from "./pages/Offers";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route
            element={
              <ProtectedRoute>
                <Offers />
              </ProtectedRoute>
            }
            path="/offers"
          />
          <Route
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
            path="/cart"
          />
          <Route
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
            path="/profile"
          />
          <Route
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
            path="/checkout"
          />
          <Route element={<SignIn />} path="/signin" />
          <Route element={<SignUp />} path="/signup" />
        </Routes>
      </div>
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;
