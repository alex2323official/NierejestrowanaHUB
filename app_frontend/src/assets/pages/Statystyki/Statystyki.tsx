import { useEffect } from "react";
import { useNavigate } from "react-router";
import "./Statystyki.styles.css";
const Statystyki = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem("user");

    // If not logged in, redirect to home
    if (!user) {
      navigate("/");
    }
  }, [navigate]);

  return <div>Statystyki</div>;
};
export default Statystyki;
