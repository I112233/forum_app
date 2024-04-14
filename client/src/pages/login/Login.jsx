import axios from "axios";
import { useContext, useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";
import Loader from "../../components/Loader/Loader";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);
  const isMounted = useRef(false); // Ref to track if component is mounted

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    setIsLoading(true);

    setTimeout(async () => {
      try {
        const res = await axios.post("/auth/login", {
          username: userRef.current.value,
          password: passwordRef.current.value,
        });

        const { token } = res.data;

        localStorage.setItem("token", token);

        console.log(token);

        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      } catch (err) {
        dispatch({ type: "LOGIN_FAILURE" });
      } finally {
        // Check if component is still mounted before updating state
        if (isMounted.current) {
          setIsLoading(false);
        }
      }
    }, 1000);
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button
          className="loginButton"
          type="submit"
          disabled={isLoading || isFetching}
        >
          {isLoading ? <Loader /> : "Login"}
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
