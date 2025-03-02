import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router";
import "./Home.styles.css";
const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Google Login Setup */}
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          // Decode the JWT token
          const decoded = jwtDecode(credentialResponse.credential);

          // Store user data in localStorage
          localStorage.setItem("user", JSON.stringify(decoded));

          // Navigate to the restricted page
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
