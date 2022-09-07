import React from "react";
import "./Form3.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Form3 = () => {
  return (
    <div>
      <Container className="signin-main" component="main" maxWidth="xs">
        <Box
          className="signin-container"
          sx={{
            marginTop: "3.5rem",
            display: "flex",
            alignItems: "center",
            width: "459px",
          }}
        >
          <Box
            className="signin-data_box"
            component="form"
            noValidate
            sx={{ mt: 1 }}
          >
            <Typography className="signin-Lable" component="h1" variant="h5">
              Sign in
            </Typography>
            <TextField
              className="signin-Textfield"
              variant="standard"
              label="Your email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              className="signin-Textfield"
              variant="standard"
              name="password"
              label="Your password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Grid className="signin-Singup" href="#" variant="body2">
              <a className="signin-Url" href="/">
                Forgot Password
              </a>
            </Grid>
            <Grid container>
              <Button
                className="signin-btn"
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                fullWidth
              >
                Sign in
              </Button>
              <Typography className="signin-Lable2" component="p" variant="p">
                Or Sign in with
              </Typography>
            </Grid>
          </Box>
          <Grid
            container
            spacing={5}
            className="signin-Socialbtn"
            direction="row"
            sx={{
              marginTop: 3,
              alignItems: "center",
              marginBottom: 6,
            }}
          >
            <Button
              className="signin-sbutton"
              variant="contained"
              sx={{ minWidth: "0", fontSize: "20px" }}
            >
              <i class="fa-brands fa-facebook-f"></i>
            </Button>
            <Button
              className="signin-sbutton"
              variant="contained"
              sx={{ minWidth: "0", fontSize: "20px" }}
            >
              <i class="fa-brands fa-twitter"></i>
            </Button>
            <Button
              className="signin-sbutton"
              variant="contained"
              sx={{ minWidth: "0", fontSize: "20px" }}
            >
              <i class="fa-brands fa-google-plus-g"></i>
            </Button>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Form3;
