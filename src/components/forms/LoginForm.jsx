import React, { useContext, useState } from "react";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { userService } from "../../services/UserService";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const { setCurrentUser } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    if (email == "") {
      setEmailError(true);
    }

    if (password == "") {
      setPasswordError(true);
    }

    if (!email || !password) return;

    let user = userService.signIn({ email, password });
    console.log({ user });

    if (!user) return;

    setCurrentUser(user);

    if (user.role === "user") {
      navigate("/bikes");
    }

    if (user.role === "manager") {
      navigate("/manager");
    }

    return true;
  };

  return (
    <>
      <form autoComplete="on" onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <TextField
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          color="secondary"
          type="email"
          sx={{ mb: 3 }}
          fullWidth
          value={email}
          error={emailError}
        />
        <TextField
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          color="secondary"
          type="password"
          value={password}
          error={passwordError}
          fullWidth
          sx={{ mb: 3 }}
        />
        <Button variant="outlined" color="secondary" type="submit">
          Login
        </Button>
        <small>
          Need an account? <Link to="/register">Register here</Link>
        </small>
      </form>
    </>
  );
};

export default LoginForm;
