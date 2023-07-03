import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { userRegistrationRequest } from "../actions";

const StyledRoot = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
    backgroundColor: "#fff",
  },
}));

const StyledContent = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

export default function RegistrationForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    currentHeight: "",
    currentWeight: "",
    dateOfBirth: "",
  });

  const handleChange = (type, event) => {
    event.preventDefault();
    console.log(type, event.target.value);
    setValues({ ...values, [type]: event.target.value });
    console.log(values);
    // setValues({ ...values, [prop]: event.target.value });
  };

  const submitUser = useCallback(
    (info) => {
      dispatch(userRegistrationRequest(info));
    },
    [dispatch]
  );

  const validateForm = () => {
    const errors = [];

    if (!values.name) {
      errors.push("Please enter your full name");
    }
    if (!values.email) {
      errors.push("Please enter your email");
    }
    if (!values.password) {
      errors.push("Please enter your password");
    }
    if (!values.currentHeight) {
      errors.push("Please enter your height");
    }
    if (!values.currentWeight) {
      errors.push("Please enter your weight");
    }
    if (!values.dateOfBirth) {
      errors.push("Please enter your birthday");
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }
    // handle form submission logic here
    console.log(values);
    submitUser(values);
  };

  const handleSignupClick = () => {
    navigate("/");
  };

  return (
    <StyledRoot>
      <Container maxWidth="sm">
        <StyledContent>
          <Typography variant="h4" align="center" gutterBottom>
            Sign Up
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            Already have an account?{" "}
            <Button variant="text" color="primary" onClick={handleSignupClick}>
              Sign In
            </Button>
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="fullName"
              label="Full Name"
              name="fullName"
              value={values.name}
              onChange={(event) => {
                handleChange("name", event);
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={values.email}
              onChange={(event) => {
                handleChange("email", event);
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={values.password}
              onChange={(event) => {
                handleChange("password", event);
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="height"
              label="Height (cm)"
              name="height"
              value={values.currentHeight}
              onChange={(event) => {
                handleChange("currentHeight", event);
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="weight"
              label="Weight (kg)"
              name="weight"
              value={values.currentWeight}
              onChange={(event) => {
                handleChange("currentWeight", event);
              }}
            />
            <Typography
              variant="body1"
              align="left"
              style={{ marginBottom: -10, marginTop: 10 }}
            >
              Enter your birthday
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="birthday"
              label=""
              type="date"
              id="birthday"
              autoComplete=""
              value={values.dateOfBirth}
              onChange={(event) => {
                handleChange("dateOfBirth", event);
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
          </Box>
        </StyledContent>
      </Container>
    </StyledRoot>
  );
}