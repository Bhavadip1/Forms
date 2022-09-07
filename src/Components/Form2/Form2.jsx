import React from "react";
import "./Form2.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Form = () => {
  return (
    <div>
      <Container className="signup-main" component="main" maxWidth="xs">
        <Box
          className="signup-container"
          sx={{
            marginTop: "3.5rem",
            display: "flex",
            alignItems: "center",
            width: "459px",
          }}
        >
          <Box
            className="signup-data_box"
            component="form"
            noValidate
            sx={{ mt: 1 }}
          >
            <Typography className="signup-Lable" component="h1" variant="h5">
              Sign up
            </Typography>
            <TextField
              className="signup-Textfield"
              variant="standard"
              required
              label="Your email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              className="signup-Textfield"
              variant="standard"
              required
              name="password"
              label="Your password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Grid item xs>
              <FormControlLabel
                className="signup-Checkbox"
                control={<Checkbox value="remember" color="primary" />}
                label="Accept the"
              />
              <a className="signup-Url" href="/">
                Terms and Conditions
              </a>
            </Grid>

            <Grid container>
              <Button
                className="signup-btn"
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign up
              </Button>

              <Grid className="signup-Singup" href="#" variant="body2">
                Already an account?
                <a className="Url" href="/">
                  Log in
                </a>
              </Grid>
            </Grid>
            <Box
              className="signup-box_main"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "5rem",
                width: "25rem",
              }}
            >
              <Box
                direction="row"
                sx={{
                  marginTop: 2,
                  alignItems: "center",
                }}
              >
                <Button
                  sx={{ color: "white", minWidth: "0", fontSize: "20px" }}
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </Button>
                <Button
                  sx={{ color: "white", minWidth: "0", fontSize: "20px" }}
                >
                  <i className="fa-brands fa-twitter"></i>
                </Button>
                <Button
                  sx={{ color: "white", minWidth: "0", fontSize: "20px" }}
                >
                  <i className="fa-brands fa-google-plus-g"></i>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Form;
