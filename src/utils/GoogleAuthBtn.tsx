 
import { GoogleLogin } from "@react-oauth/google";
import { setCookie } from "./setToCookies";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { useGetUsersQuery } from "../redux/features/auth/authApi";

const AuthBtn = () => {
    const dispatch = useAppDispatch()
    const {data} = useGetUsersQuery(undefined)
   
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        const token = credentialResponse.credential;
        dispatch(setUser({ token }));
        console.log(token, data);
        localStorage.setItem("tokenForAv", token as string);
        setCookie("token", token as string, 30);
        // window.location.reload();
      }}
      onError={() => {
        console.log("Login Failed");
      }}
      useOneTap
    />
  );
};

export default AuthBtn;