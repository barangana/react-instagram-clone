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

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      I am the login page
    </div>
  );
}

export default Login;
