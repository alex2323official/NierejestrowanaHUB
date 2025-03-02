import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router";
import "./Home.styles.css";
const Home = () => {
  let navigate = useNavigate();

  return (
    <>
      {/* Google Login Setup */}
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          // basic data
          console.log(credentialResponse);
          // full decoded JSON web token
          console.log(jwtDecode(credentialResponse.credential));
          navigate("/statystyki");
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        auto_select={true}
      />
    </>
  );
};
export default Home;
