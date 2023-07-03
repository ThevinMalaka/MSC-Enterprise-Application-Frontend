import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function RegistrationForm() {
  const navigate = useNavigate();
  const [values, setValues] = React.useState({
    fullName: "",
    email: "",
    password: "",
    height: "",
    weight: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
    console.log(values);
  };

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
              autoFocus
              value={values.fullName}
              onChange={handleChange("fullName")}
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
              onChange={handleChange("email")}
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
              onChange={handleChange("password")}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="height"
              label="Height (cm)"
              name="height"
              value={values.height}
              onChange={handleChange("height")}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="weight"
              label="Weight (kg)"
              name="weight"
              value={values.weight}
              onChange={handleChange("weight")}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
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
