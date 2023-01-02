import { Outlet } from 'react-router-dom';
import SignInPage from "../pages/SignInPage";

// check if user logged in
const useAuth = () => {
  const user = { loggedIn: false }
  return user.loggedIn;
}

//Protect everything but SignInPage
const ProtectedRoutes = () => {

  if (useAuth() === true) {
    return <Outlet />
  }
  else return <SignInPage />

};

export default ProtectedRoutes