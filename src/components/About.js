import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuOpen from "@material-ui/icons/MenuOpen";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HighlightOff from "@material-ui/icons/HighlightOff";
import Home from "@material-ui/icons/Home";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    height: "100vh",
    width: "100%",
  },

  gridUtils: {
    height: "100%",
    width: "100%",
  },

  leftGrid: {
    background: theme.palette.common.gold,

    [theme.breakpoints.down("sm")]: {
      height: "10vh",
    },
  },

  middleGrid: {
    backgroundColor: theme.palette.common.dollar,
    // marginLeft: "15em",
  },

  rightGrid: {
    backgroundColor: theme.palette.common.tan,
  },

  menuGrid: {
    marginTop: ".5em",
    marginLeft: ".5em",

    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      marginLeft: 0,
    },
  },
  menu: {
    width: 40,
    height: 40,
    color: "#fff",
  },
  divider: {
    width: "7em",
    height: 3,
    background: "#fff",
    marginLeft: "1em",
    marginRight: "1em",
  },
  title: {
    textTransform: "uppercase",
    color: theme.palette.common.tan,
  },
  bio: {
    fontWeight: 400,
    color: "#fff",
  },
  avatar: {
    width: 150,
    height: 150,
  },
  drawer: {
    width: 337,
    background: theme.palette.common.brown,

    [theme.breakpoints.down("md")]: {
      width: 320,
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  close: {
    width: 40,
    height: 40,
    color: "#fff",
  },
}));

const About = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesMDOnly = useMediaQuery(theme.breakpoints.only("md"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Grid item container direction="row" className={classes.aboutContainer}>
      <Grid
        item
        className={`${classes.gridUrils} ${classes.leftGrid}`}
        lg={3}
        md={1}
        sm={12}
      >
        <Grid
          item
          style={{
            position: "fixed",
            background: theme.palette.common.gold,
            width: matchesSM ? "100%" : matchesMDOnly ? 90 : 337,
            height: matchesSM ? "10vh" : "100%",
          }}
        >
          <Grid
            item
            container
            justify={matchesSM ? "space-between" : undefined}
            alignItems={matchesSM ? "center" : undefined}
            direction={matchesSM ? "row" : "column"}
            style={{ marginBottom: !matchesSM ? "2em" : 0 }}
          >
            <Grid item className={classes.menuGrid}>
              <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuOpen className={classes.menu} />
              </IconButton>
            </Grid>
            <Grid
              item
              style={{
                display: matchesMDOnly ? "none" : undefined,
                position: "relative",
                zIndex: 99999999999,
              }}
            >
              <Grid
                container
                alignItems="center"
                style={{
                  marginTop: matchesSM ? 0 : "1.5em",
                  marginLeft: matchesSM ? 0 : "5em",
                  position: "absolute",
                  zIndex: 9999999,
                }}
              >
                <Grid item>
                  <Typography
                    variant="body1"
                    style={{
                      fontWeight: 700,
                      color: theme.palette.common.tan,
                    }}
                  >
                    01
                  </Typography>
                </Grid>
                <Grid item>
                  <Divider className={classes.divider} />
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    style={{ fontWeight: 700, color: "#fff" }}
                  >
                    06
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid
              item
              container
              justify="center"
              style={{ marginBottom: "2em" }}
            >
              <Avatar
                alt="Hamed's Photo"
                src="/assets/logo.png"
                className={classes.avatar}
              />
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{ marginLeft: "5em" }}
            >
              <Grid item>
                <Typography variant="body2" className={classes.title}>
                  Name
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" className={classes.bio}>
                  Hamed Jimoh
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{
                marginLeft: "5em",
                marginTop: "2em",
                marginBottom: "2em",
              }}
            >
              <Grid item>
                <Typography variant="body2" className={classes.title}>
                  Role
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" className={classes.bio}>
                  Frontend Web Developer
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{ marginLeft: "5em", marginBottom: "2em" }}
            >
              <Grid item>
                <Typography variant="body2" className={classes.title}>
                  Email
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" className={classes.bio}>
                  hameed.jimoh1601@gmail.com
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{ marginLeft: "5em" }}
            >
              <Grid item>
                <Typography variant="body2" className={classes.title}>
                  Phone
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" className={classes.bio}>
                  +2347086937133
                </Typography>
              </Grid>
            </Grid>
          </Hidden>
          <SwipeableDrawer
            disableBackdropTransition={!iOS}
            disableDiscovery={iOS}
            open={openDrawer}
            onOpen={() => setOpenDrawer(true)}
            onClose={() => setOpenDrawer(false)}
            classes={{ paper: classes.drawer }}
          >
            <IconButton
              onClick={() => setOpenDrawer(false)}
              style={{ maxWidth: 70, marginLeft: "auto" }}
            >
              <HighlightOff className={classes.close} />
            </IconButton>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </List>
          </SwipeableDrawer>
        </Grid>
      </Grid>
      <Grid
        item
        lg={5}
        md={6}
        className={`${classes.gridUtils} ${classes.middleGrid}`}
      ></Grid>
      <Grid
        item
        lg={4}
        md={5}
        className={`${classes.gridUtils} ${classes.rightGrid}`}
      ></Grid>
    </Grid>
  );
};

export default About;
