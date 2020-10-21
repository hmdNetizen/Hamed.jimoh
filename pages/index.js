import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
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
    paddingTop: "5em",
    paddingBottom: "5em",
  },
}));

const pageCount = [
  {
    id: 1,
    pageHeight: 0,
  },
  {
    id: 2,
    pageHeight: 430,
  },
  {
    id: 3,
    pageHeight: 1800,
  },
];

const Homepage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [selectedItem, setselectedItem] = useState(0);
  const [pageCounter, setPageCounter] = useState(1);

  // useEffect(() => {
  //   window.addEventListener(
  //     "scroll",
  //     () => {
  //       console.log(window.pageYOffset);
  //       if (window.pageYOffset <= 300) {
  //         setPageCounter(1);
  //       } else if (window.pageYOffset >= 400 && window.pageYOffset <= 1770) {
  //         setPageCounter(2);
  //       } else if (window.pageYOffset > 1770 && window.pageYOffset < 2500) {
  //         setPageCounter(3);
  //       } else {
  //         setPageCounter(1);
  //       }
  //       if (window.pageYOffset > (781 / 2) * 1.3) {
  //         setPageCounter(2);
  //       } else {
  //         setPageCounter(6);
  //       }
  //     },
  //     false
  //   );
  // });
  return (
    <Grid container direction="column" id="pageContainer">
      <About
        selectedItem={selectedItem}
        setselectedItem={setselectedItem}
        pageCounter={pageCounter}
        setPageCounter={setPageCounter}
      />
      <Grid className={classes.bodyContainer}>
        <Services setPageCounter={setPageCounter} />
        <Portfolio />
      </Grid>
    </Grid>
  );
};

export default Homepage;
