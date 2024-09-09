/* eslint-disable @typescript-eslint/no-explicit-any */
import { GoogleLogin } from "@react-oauth/google";
import { setCookie } from "./setToCookies";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useGetMeQuery } from "../redux/features/auth/authApi";

const AuthBtn = () => {
  const token = useAppSelector((state) => state.auth.token);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Fetch user data using the token
  const { data, refetch } = useGetMeQuery(token, { skip: !token });

  // Check user data when it is available and handle redirection
  useEffect(() => {
    if (data?.success) {
      dispatch(setUser({ token, user: data.data }));

      // Redirect based on the presence of the phone number
      if (!data.data.number) {
        navigate("/updateInfo");
      } else {
        navigate("/");
      }
    }
  }, [data, dispatch, navigate, token]);

  // Handle login success
  const handleLoginSuccess = (credentialResponse: any) => {
    const token = credentialResponse.credential;
    dispatch(setUser({ token }));
    setCookie("token", token as string, 30);

    // Trigger data fetching after the login is successful
    refetch();
  };

  return (
    <GoogleLogin
      onSuccess={handleLoginSuccess}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default AuthBtn;
