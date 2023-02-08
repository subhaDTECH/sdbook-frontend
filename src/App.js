import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "./Actions/User";
import Home from "./Components/Home/Home";
import Account from "./Components/Account/Account";
import NewPost from "./Components/NewPost/NewPost";
import Register from "./Components/Register/Register";
import UpdateProfile from "./Components/UpdateProfile/UpdateProfile";
import UpdatePassword from "./Components/UpdatePassword/UpdatePassword";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import UserProfile from "./Components/UserProfile/UserProfile";
import Search from "./Components/Search/Search";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <Router>
      {/* {isAuthenticated && <Header />} */}

      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
        <Route
        exact
          path="/account"
          element={isAuthenticated ? <Account /> : <Login />}
        />

        <Route
        exact
          path="/register"
          element={isAuthenticated ? <Account /> : <Register />}
        />

        <Route
        exact
          path="/newpost"
          element={isAuthenticated ? <NewPost /> : <Login />}
        />

        <Route
        exact
          path="/update/profile"
          element={isAuthenticated ? <UpdateProfile /> : <Login />}
        />
        <Route
        exact
          path="/update/password"
          element={isAuthenticated ? <UpdatePassword /> : <Login />}
        />

        <Route
        exact
          path="/forgot/password"
          element={isAuthenticated ? <UpdatePassword /> : <ForgotPassword />}
        />

        <Route
        exact
          path="/password/reset/:token"
          element={isAuthenticated ? <UpdatePassword /> : <ResetPassword />}
        />

        <Route
        exact
          path="/user/:id"
          element={isAuthenticated ? <UserProfile /> : <Login />}
        />

        <Route  exact path="search" element={<Search />} />

        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
