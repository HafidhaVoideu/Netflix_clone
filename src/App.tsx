// ***********  Imports ***********

import "./App.css";
import { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router";
import Footer from "./scenes/global/footer/Footer";
import { auth } from "./firebase";
import { login, logout } from "./redux/features/userSlice";
import { useDispatch } from "react-redux/es/exports";
import { AppDispatch } from "./redux/store";
import Signup from "./scenes/loginScreen/signup/Signup";
import SignIn from "./scenes/loginScreen/SingIn/SignIn";
import { HomeScreen, ProfileScreen, LoginScreen } from "./scenes/index";
import {
  HomeLayout,
  BackgroundLayout,
  LoginLayout,
} from "./components/layouts";
import PageNotFound from "./components/pageNotFound/PageNotFound";

// ***********  App ***********

function App() {
  const { pathname } = useLocation();
  const ScrollToTop = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log("user is Logged in", userAuth);
        dispatch(login({ email: userAuth.email, id: userAuth.uid }));
        navigate("/home");
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <ScrollToTop />
      <Routes>
        <Route element={<LoginLayout />}>
          <Route path="/" element={<LoginScreen />} />
          <Route element={<BackgroundLayout />}>
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<Signup />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Route>
        <Route element={<HomeLayout />}>
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/editprofile" element={<ProfileScreen />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
