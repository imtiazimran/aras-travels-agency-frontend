import { GoogleLogin } from "@react-oauth/google";
import { setCookie } from "./setToCookies";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { useGetMeQuery } from "../redux/features/auth/authApi";
const AuthBtn = () => {
  const token = useAppSelector((state) => state.auth.token);
  const dispatch = useAppDispatch();
  const { data } = useGetMeQuery(token, { skip: !token });
  if (data?.success === true) {
    dispatch(setUser({ token,  user: data.data }));
  }
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        const token = credentialResponse.credential;
        dispatch(setUser({ token }));
        setCookie("token", token as string, 30);
        window.location.reload();
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default AuthBtn;
