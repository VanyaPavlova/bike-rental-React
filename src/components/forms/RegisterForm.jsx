import React, { useContext, useState } from "react";
import { TextField, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { userService } from "../../services/UserService";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const { setCurrentUser } = useContext(UserContext);

  function handleSubmit(event) {
    event.preventDefault();

    setNameError(false);
    setEmailError(false);
    setPasswordError(false);

    if (name == "") {
      setEmailError(true);
    }

    if (email == "") {
      setEmailError(true);
    }

    if (password == "") {
      setPasswordError(true);
    }

    if (email) {
      console.info("Email is already taken");
      return;
    }

    let user = userService.signUp({ name, email, password });
    console.log({ user });

    setCurrentUser(user);
    if (!user.access) {
      navigate("/bikes");
    }
  }

  return (
    <>
      <h2>Register Form</h2>
      <form onSubmit={handleSubmit} action={<Link to="/login" />}>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            error={nameError}
            fullWidth
          />
        </Stack>
        <TextField
          type="email"
          variant="outlined"
          color="secondary"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          error={emailError}
          fullWidth
          sx={{ mb: 4 }}
        />
        <TextField
          type="password"
          variant="outlined"
          color="secondary"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          error={passwordError}
          fullWidth
          sx={{ mb: 4 }}
        />
        <Button variant="outlined" color="secondary" type="submit">
          Register
        </Button>
        <small>
          Already have an account? <Link to="/login">Login Here</Link>
        </small>
      </form>
    </>
  );
};

export default RegisterForm;
