import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import FirebaseContext from "../context/firebase";

function Login() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || email === "";

  const handleLogin = () => {};

  useEffect(() => {
    document.title = "Login - Instagram";
  }, []);

  return <p>I am the login page</p>;
}

export default Login;
