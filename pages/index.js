import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import About from "../src/components/About";

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    height: "100vh",
    width: "100%",
  },
}));

const Homepage = () => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Grid container direction="column" style={{ height: 2500 }}>
      <About
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </Grid>
  );
};

export default Homepage;
