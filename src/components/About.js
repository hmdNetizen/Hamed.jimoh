import React, { useState, useEffect } from "react";
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
import ToolTip from "@material-ui/core/ToolTip";
import HighlightOff from "@material-ui/icons/HighlightOff";
import Home from "@material-ui/icons/Home";
import ImportantDevices from "@material-ui/icons/ImportantDevices";
import ListIcon from "@material-ui/icons/List";
import Build from "@material-ui/icons/Build";
import Forum from "@material-ui/icons/Forum";
import VerticalSplit from "@material-ui/icons/VerticalSplit";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Twitter from "@material-ui/icons/Twitter";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";

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
    [theme.breakpoints.down("sm")]: {
      height: "10vh",
    },
  },

  middleGrid: {
    backgroundColor: theme.palette.common.dollar,
    paddingLeft: "4em",
    paddingRight: "4em",

    [theme.breakpoints.down("md")]: {
      paddingLeft: "3em",
      paddingRight: "3em",
    },

    [theme.breakpoints.down("sm")]: {
      paddingTop: "3em",
    },

    [theme.breakpoints.down("xs")]: {
      paddingLeft: "2.5em",
      paddingRight: "2.5em",
    },
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
    width: "25%",
    background: theme.palette.secondary.dark,

    [theme.breakpoints.down("md")]: {
      width: 337,
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "5em",
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
  listButton: {
    paddingLeft: "3em",
    color: theme.palette.common.dollar,

    [theme.breakpoints.down("xs")]: {
      paddingLeft: "2em",
    },

    "&:hover": {
      background: theme.palette.secondary.light,
    },
  },

  listIcon: {
    color: theme.palette.common.dollar,
    marginRight: "1.5em",
  },

  listSelected: {
    background: theme.palette.secondary.light,
  },
  listText: {
    fontSize: "2rem",
  },
  nameStyle: {
    fontSize: "4.25rem",
    fontWeight: 800,
    color: theme.palette.common.brown,

    [theme.breakpoints.down("md")]: {
      fontSize: "3.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "2.5rem",
    },
  },
  profileText: {
    lineHeight: 1.7,
    color: theme.palette.primary.light,

    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  tooltip: {
    color: theme.palette.primary.dark,
  },
}));

const lists = [
  { id: 1, pageCount: "01", label: "Home", icon: Home },
  { id: 2, pageCount: "02", label: "Services", icon: ImportantDevices },
  { id: 3, pageCount: "03", label: "Portfolio", icon: ListIcon },
  { id: 4, pageCount: "04", label: "Resume", icon: VerticalSplit },
  { id: 5, pageCount: "05", label: "Skills", icon: Build },
  { id: 6, pageCount: "06", label: "Contact", icon: Forum },
];

const socials = [
  { id: 0, title: "LinkedIn", icon: LinkedIn },
  { id: 1, title: "Twitter", icon: Twitter },
  { id: 2, title: "Facebook", icon: Facebook },
  { id: 3, title: "Instagram", icon: Instagram },
];

const About = (props) => {
  const {
    selectedItem,
    setselectedItem,
    pageCounter,
    setPageCounter,
    ...rest
  } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesMDOnly = useMediaQuery(theme.breakpoints.only("md"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesXXS = useMediaQuery("(max-width:450px)");
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
            width: matchesSM ? "100%" : matchesMDOnly ? "8.333333%" : "25%",
            height: matchesSM ? "10vh" : "100%",
            zIndex: matchesSM ? 1301 : undefined,
          }}
        >
          <Grid
            item
            container
            alignItems={matchesSM ? "center" : undefined}
            direction={matchesSM ? "row" : "column"}
            style={{
              marginBottom: !matchesSM ? "2em" : 0,
              marginLeft: matchesSM && "1em",
            }}
          >
            <Grid item className={classes.menuGrid}>
              <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                {matchesSM && openDrawer ? (
                  <HighlightOff className={classes.close} />
                ) : (
                  <MenuOpen className={classes.menu} />
                )}
              </IconButton>
            </Grid>
            <Grid
              item
              style={{
                display: matchesMDOnly ? "none" : undefined,
                marginLeft: matchesSM && "auto",
                marginRight: matchesSM && "4em",
              }}
            >
              <Grid
                container
                alignItems="center"
                justify="center"
                style={{
                  marginTop: matchesSM ? 0 : "1.5em",
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
                    {`0${pageCounter}`}
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
                    {`0${lists.length}`}
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
                src="/assets/passport.png"
                size={20}
                className={classes.avatar}
              />
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{ marginLeft: "2em" }}
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
                marginLeft: "2em",
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
              style={{ marginLeft: "2em", marginBottom: "2em" }}
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
              style={{ marginLeft: "2em" }}
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
          {/* The swipeable navigation drawer */}
          <SwipeableDrawer
            disableBackdropTransition={!iOS}
            disableDiscovery={iOS}
            open={openDrawer}
            onOpen={() => setOpenDrawer(true)}
            onClose={() => setOpenDrawer(false)}
            classes={{ paper: classes.drawer }}
          >
            {!matchesSM && (
              <IconButton
                onClick={() => setOpenDrawer(false)}
                style={{ maxWidth: 70, marginLeft: "auto" }}
              >
                <HighlightOff className={classes.close} />
              </IconButton>
            )}
            {/* Hide Page counter and line divider when the breakpoint is below 960px */}
            <Hidden smDown>
              <Grid
                container
                alignItems="center"
                justify="center"
                style={{
                  marginTop: matchesSM ? 0 : "1.5em",
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
                    {`0${pageCounter}`}
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
                    {`0${lists.length}`}
                  </Typography>
                </Grid>
              </Grid>
            </Hidden>
            {/* Rendering The navigation menu and icon dynamically */}
            <List style={{ marginTop: !matchesSM ? "2em" : 0 }}>
              {lists.map((list) => (
                <ListItem
                  key={list.id}
                  button
                  divider
                  classes={{
                    root: classes.listButton,

                    selected: classes.listSelected,
                  }}
                  selected={selectedItem === list.id}
                  onClick={() => {
                    setselectedItem(list.id);
                    setOpenDrawer(false);
                    setPageCounter(list.id);
                  }}
                >
                  <ListItemIcon classes={{ root: classes.listIcon }}>
                    {list.icon.displayName === "HomeIcon" ? (
                      <Home />
                    ) : list.icon.displayName === "ImportantDevicesIcon" ? (
                      <ImportantDevices />
                    ) : list.icon.displayName === "ListIcon" ? (
                      <ListIcon />
                    ) : list.icon.displayName === "VerticalSplitIcon" ? (
                      <VerticalSplit />
                    ) : list.icon.displayName === "BuildIcon" ? (
                      <Build />
                    ) : list.icon.displayName === "ForumIcon" ? (
                      <Forum />
                    ) : null}
                  </ListItemIcon>
                  <ListItemText
                    primary={list.label}
                    classes={{ root: classes.listText }}
                  />
                </ListItem>
              ))}
            </List>
          </SwipeableDrawer>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        justify={matchesXS ? "center" : matchesSM ? undefined : "center"}
        alignItems={matchesSM ? "center" : undefined}
        lg={4}
        md={5}
        className={`${classes.gridUtils} ${classes.middleGrid}`}
      >
        <Hidden mdUp>
          <Grid
            item
            style={{
              marginBottom: matchesXXS ? "1em" : "2em",
            }}
          >
            <Avatar
              alt="Hamed's Photo"
              src="/assets/passport.png"
              size={20}
              className={classes.avatar}
            />
          </Grid>
        </Hidden>
        <Grid
          item
          style={{
            marginBottom: matchesXXS
              ? ".5em"
              : matchesSM
              ? "2em"
              : matchesMD
              ? "1em"
              : "1em",
          }}
        >
          <Typography
            variant="body1"
            paragraph
            style={{
              fontSize: matchesXS ? "1.2rem" : matchesMD ? "1.5rem" : "1.75",
              color: theme.palette.primary.dark,
            }}
          >
            Hello, my name is
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h1"
            paragraph
            className={classes.nameStyle}
            style={{
              fontSize: matchesXXS && "2rem",
            }}
          >
            Hamed Jimoh
          </Typography>
        </Grid>
        <Grid
          item
          style={{ marginTop: "2em", marginBottom: matchesXXS ? "2em" : "4em" }}
        >
          <Typography variant="body1" paragraph className={classes.profileText}>
            A frontend web developer from Lagos, Nigeria. I spend a lot of my
            time learning and building stuff for the web through carefully
            crafted code and user-friendly design and implementation.
          </Typography>
        </Grid>
        <Grid item>
          <Grid container justify={matchesMDOnly ? undefined : "center"}>
            {socials.map((social) => (
              <Grid item key={social.id}>
                <ToolTip
                  title={social.title}
                  arrow
                  className={classes.tooltip}
                  {...rest}
                >
                  <IconButton>
                    {social.icon.displayName === "LinkedInIcon" ? (
                      <LinkedIn
                        style={{
                          width: matchesXXS ? ".7em" : ".8em",
                          height: matchesXXS ? ".7em" : ".8em",
                        }}
                      />
                    ) : social.icon.displayName === "TwitterIcon" ? (
                      <Twitter
                        style={{
                          width: matchesXXS ? ".7em" : ".8em",
                          height: matchesXXS ? ".7em" : ".8em",
                        }}
                      />
                    ) : social.icon.displayName === "FacebookIcon" ? (
                      <Facebook
                        style={{
                          width: matchesXXS ? ".7em" : ".8em",
                          height: matchesXXS ? ".7em" : ".8em",
                        }}
                      />
                    ) : social.icon.displayName === "InstagramIcon" ? (
                      <Instagram
                        style={{
                          width: matchesXXS ? ".7em" : ".8em",
                          height: matchesXXS ? ".7em" : ".8em",
                        }}
                      />
                    ) : null}
                  </IconButton>
                </ToolTip>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Hidden smDown>
        <Grid
          item
          lg={5}
          md={6}
          className={`${classes.gridUtils} ${classes.rightGrid}`}
        >
          <img
            src="/assets/photo.jpg"
            alt="Hamed Picture"
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default About;
