import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

const Services = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      item
      container
      direction="column"
      style={{
        background: "#423125",
        width: "100%",
        height: "100vh",
        paddingLeft: matchesSM ? 0 : matchesMD ? "8.33333%" : "25%",
      }}
    >
      <Grid item container direction="row">
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2" gutterBottom>
                Services
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4">
                Do you want a perfect website?
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                I build websites with amazing looks and fast load-times that do
                one thing: Get You Results.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Whatever you have in mind, you should know - I build with a
                goal-oriented eye for precision.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                When we're done, you will have a site that gets the job done in
                style.
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="outlined">Download my CV</Button>
            </Grid>
            <Grid item>
              <Button variant="outlined">Check my Portfolio</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
