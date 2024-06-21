import { useDispatch, useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
// import AccessDenied from "@/pages/AccessDenied";
// import { ROLE } from "./features//auth";
import {
  selectIsLoggedIn,
  selectUser,
  setUser,
} from "@/redux/features/app/appSlice";
import { TRole } from "@/@types";
import { useEffect } from "react";

interface Props {
  component: React.ComponentType;
  path?: string;
  roles: TRole[];
}

export const PrivateRoute: React.FC<Props> = ({
  component: RouteComponent,
  roles,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setUser({
        user: localStorage.getItem(`user`)
          ? JSON.parse(localStorage.getItem(`user`) as string)
          : null,
        access: localStorage.getItem(`access`),
        refresh: localStorage.getItem(`refresh`),
      })
    );
  }, [dispatch]);

  const user = useSelector(selectUser);
  console.log(user);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userHasRequiredRole = user && roles?.includes(user.role) ? true : false;

  console.log(isLoggedIn, "isloggedin");
  console.log(userHasRequiredRole, "has role");
  // if (isLoggedIn && userHasRequiredRole) {
  return <RouteComponent />;
  // }

  // if (isLoggedIn && !userHasRequiredRole) {
  //   return <AccessDenied title={pageTitles.accessDeniedPage} />;
  // }
  // if (!isLoggedIn && userHasRequiredRole) {
  //   return <Navigate to="/login" />;
  // }
};
