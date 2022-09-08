import React from "react";
import "./Form1.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Form = () => {
  return (
    <div className="Login-form-main">
      <Container className="Login-form-submain" component="main" maxWidth="xs">
        <Box
          className="Login-box_main"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "5rem",
            width: "25rem",
            paddingLeft: "0 !important",
          }}
        >
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box
            direction="row"
            sx={{
              marginTop: 2,
              alignItems: "center",
              height: "5rem",
            }}
          >
            <Button sx={{ color: "white", minWidth: "0", fontSize: "20px" }}>
              <i className="fa-brands fa-facebook-f"></i>
            </Button>
            <Button sx={{ color: "white", minWidth: "0", fontSize: "20px" }}>
              <i className="fa-brands fa-twitter"></i>
            </Button>
            <Button sx={{ color: "white", minWidth: "0", fontSize: "20px" }}>
              <i className="fa-brands fa-google-plus-g"></i>
            </Button>
          </Box>
        </Box>
        <Box
          className="Login-Container"
          sx={{
            display: "flex",
            alignItems: "center",
            width: "459px",
          }}
        >
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              className="Login-Textfield"
              variant="standard"
              required
              label="Your email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              className="Login-Textfield"
              variant="standard"
              required
              name="password"
              label="Your password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Grid item xs>
              <Link className="Login-Link" href="#" variant="body2">
                Forgot <strong>Password?</strong>
              </Link>
            </Grid>

            <Grid container>
              <Button
                className="Login-btn"
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
              </Button>
              <Grid item>
                <Link className="Login-up" href="#" variant="body2">
                  Don't have an account? <strong>Sign Up</strong>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Form;
