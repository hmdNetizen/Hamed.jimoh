import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import About from "../src/components/About";
import Services from "../src/components/Services";
import Portfolio from "../src/components/Portfolio";

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    height: "100vh",
    width: "100%",
  },
  bodyContainer: {
    background: theme.palette.common.darkBrown,
  },
}));

const Homepage = () => {
  const classes = useStyles();

  const [selectedItem, setselectedItem] = useState(0);
  const [pageCounter, setPageCounter] = useState(1);
  return (
    <Grid container direction="column">
      <About
        selectedItem={selectedItem}
        setselectedItem={setselectedItem}
        pageCounter={pageCounter}
        setPageCounter={setPageCounter}
      />
      <Grid className={classes.bodyContainer}>
        <Services />
        <Portfolio />
      </Grid>
    </Grid>
  );
};

export default Homepage;
