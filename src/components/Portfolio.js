import React, { useState, Fragment, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import FilterListIcon from "@material-ui/icons/FilterList";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import ToolTip from "@material-ui/core/ToolTip";
import Button from "@material-ui/core/Button";
import getProjects from "./projectList";

import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

import { useTheme, makeStyles } from "@material-ui/core/styles";

import Slider from "react-slick";

const useStyles = makeStyles((theme) => ({
  filterIcon: {
    fill: theme.palette.common.dollar,
  },
  menu: {
    background: "#c4c4c4",
  },
  menuItem: {
    background: "transparent",
    "&:hover": {
      background: "transparent",
      color: theme.palette.common.brown,
    },
  },

  listItemText: {
    fontSize: "1.2rem",
    marginLeft: "2em",
    marginRight: "2em",
  },

  menuSelected: {
    color: theme.palette.common.brown,
  },
  card: {
    position: "relative",
    height: 300,
    cursor: "pointer",
    marginLeft: "auto",
    marginRight: "auto",

    "&:hover": {
      "& $projectText": {
        left: 0,
        transition: "all .2s ease-in",
      },
    },
  },
  projectImg: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  projectText: {
    width: "100%",
    height: "100%",
    background:
      "radial-gradient(circle, rgba(208,180,159,0.9724264705882353) 0%, rgba(164,117,81,1) 100%)",
    color: theme.palette.common.dollar,
    position: "absolute",
    zIndex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    left: "-100%",
    transition: "all .2s ease-in",
  },
  arrowButton: {
    background: theme.palette.common.tan,
    padding: ".5em 1.5em",

    "&:hover": {
      background: theme.palette.common.tan,

      "& $arrow": {
        transform: "translateX(-5px)",
        transition: "transform .5s ease",
      },
    },
  },
  arrow: {
    height: 60,
    width: 60,

    [theme.breakpoints.down("sm")]: {
      height: 45,
      width: 45,
    },

    [theme.breakpoints.down("xs")]: {
      height: 30,
      width: 30,
    },
  },
  listItem: {
    paddingLeft: 0,
    paddingRight: 0,
  },

  listText: {
    fontSize: "1rem",
    color: theme.palette.common.dollar,
  },
  button: {
    ...theme.typography.btn,
    borderRadius: 50,
    border: `2px solid ${theme.palette.common.tan}`,
    fontSize: "1.25rem",
    padding: ".5em 1.5em",

    "&:hover": {
      background: theme.palette.common.gold,
    },
    [theme.breakpoints.only("md")]: {
      padding: ".5em .9em",
    },
  },
}));

const Portfolio = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesMDX = useMediaQuery("(max-width:980px)");
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesXXS = useMediaQuery("(max-width:450px)");
  const matchesXXXS = useMediaQuery("(max-width:340px)");

  const [projects, setProjects] = useState(getProjects);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState(1);
  const [zoomIn, setZoomIn] = useState(false);
  const [selectedProject, setSelectedProject] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setZoomIn(false);
  };

  const sortByNewest = () => {
    const newProjects = [...projects];
    newProjects.sort((a, b) => b.date - a.date);

    setProjects(newProjects);
  };

  const sortByOldest = () => {
    const newProjects = [...projects];
    newProjects.sort((a, b) => a.date - b.date);

    setProjects(newProjects);
  };

  const sortByName = () => {
    const newProjects = [...projects];
    newProjects.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );

    setProjects(newProjects);
  };

  const handleProjectSelect = (id) => {
    const newProjects = [...projects];
    newProjects.filter((project) =>
      project.id === id ? (project.selected = true) : (project.selected = false)
    );

    const filteredProject = newProjects.filter((project) => project.selected);

    setSelectedProject(filteredProject);
  };

  const allProjects = (
    <Fragment>
      <Grid
        item
        container
        alignItems="center"
        justify="space-between"
        style={{ paddingLeft: "2em", paddingRight: "2em" }}
      >
        <Grid item>
          <Typography
            variant="h2"
            gutterBottom
            style={{ fontSize: matchesXXS ? "2rem" : undefined }}
          >
            Projects
          </Typography>
        </Grid>
        {/* Filter Icon and text section */}
        <Grid item>
          <ToolTip
            title={
              <h4
                style={{
                  fontSize: "1rem",
                  margin: 0,
                  padding: "1em",
                }}
              >
                Sort
              </h4>
            }
            aria-label="sort"
          >
            <IconButton
              aria-controls="customized-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <FilterListIcon classes={{ root: classes.filterIcon }} />
            </IconButton>
          </ToolTip>
          <Menu
            elevation={0}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            classes={{ paper: classes.menu }}
          >
            <MenuItem
              classes={{
                root: classes.menuItem,
                selected: classes.menuSelected,
              }}
              onClick={() => {
                setSelectedMenu(1);
                setProjects(getProjects);
                handleClose();
              }}
            >
              <ListItemText
                primary="All"
                classes={{ primary: classes.listItemText }}
              />
            </MenuItem>
            <MenuItem
              classes={{
                root: classes.menuItem,
                selected: classes.menuSelected,
              }}
              selected={selectedMenu === 2}
              onClick={() => {
                setSelectedMenu(2);
                sortByNewest();
                handleClose();
              }}
            >
              <ListItemText
                primary="Newest"
                classes={{ primary: classes.listItemText }}
              />
            </MenuItem>

            <MenuItem
              classes={{
                root: classes.menuItem,
                selected: classes.menuSelected,
              }}
              selected={selectedMenu === 3}
              onClick={() => {
                setSelectedMenu(3);
                sortByName();
                handleClose();
              }}
            >
              <ListItemText
                primary="Name"
                classes={{ primary: classes.listItemText }}
              />
            </MenuItem>

            <MenuItem
              classes={{
                root: classes.menuItem,
                selected: classes.menuSelected,
              }}
              selected={selectedMenu === 4}
              onClick={() => {
                setSelectedMenu(4);
                sortByOldest();
                handleClose();
              }}
            >
              <ListItemText
                primary="Oldest"
                classes={{ primary: classes.listItemText }}
              />
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justify={matchesSM ? "center" : undefined}
        style={{
          paddingLeft: "2em",
          paddingRight: "2em",
          marginTop: "3em",
          marginBottom: "5em",
        }}
        spacing={matchesSM ? undefined : 3}
      >
        {projects.map((project) => (
          <Grid
            item
            key={project.id}
            lg={4}
            md={6}
            sm={9}
            xs={12}
            style={{
              marginTop: matchesSM ? "1em" : 0,
              marginBottom: matchesSM ? "1em" : 0,
            }}
            className="animate__animated animate__zoomIn"
            onClick={() => {
              handleProjectSelect(project.id);
              setIsSelected(true);
            }}
          >
            <Card className={classes.card}>
              <img
                src={project.img}
                alt={project.alt}
                className={classes.projectImg}
              />
              <CardContent className={classes.projectText}>
                <Typography
                  variant="h4"
                  style={{ fontWeight: 700, textAlign: "center" }}
                >
                  {project.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );

  // Displays individual project selected

  const showSelectedProject = (
    <Grid
      container
      direction="column"
      style={{
        padding: matchesXXS
          ? "0 1em 5em 1em"
          : matchesXS
          ? "0 2em 5em 2em"
          : matchesMDX
          ? "0 4em 5em 6em"
          : "0 5em 5em 6em",
      }}
    >
      <Grid item style={{ marginBottom: "1.5em" }}>
        <Button
          variant="contained"
          className={classes.arrowButton}
          onClick={() => {
            setIsSelected(false);
            setSelectedProject([]);
          }}
        >
          <img src="/assets/back.png" className={classes.arrow} />
        </Button>
      </Grid>
      {selectedProject.map((project) => (
        <Grid
          item
          container
          key={project.id}
          spacing={6}
          justify={matchesSM ? "center" : undefined}
        >
          <Grid
            item
            md
            style={{
              maxWidth: matchesXXXS
                ? "17em"
                : matchesXXS
                ? "20em"
                : matchesXS
                ? "25em"
                : matchesSM
                ? "30em"
                : "25em",
            }}
          >
            <Slider {...settings}>
              {project.images.map((image) => (
                <img key={image.id} src={image.link} alt={image.alt} />
              ))}
            </Slider>
          </Grid>
          <Grid item md>
            <Grid
              container
              direction="column"
              alignItems={matchesSM ? "center" : undefined}
            >
              <Grid item>
                <Typography
                  variant={matchesSM ? "h4" : "h5"}
                  gutterBottom
                  style={{ marginBottom: ".75em" }}
                >
                  {project.name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{ fontSize: matchesSM ? "1.5rem" : "1.25rem" }}
                >
                  Descriptions
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  style={{
                    fontSize: "1rem",
                    color: theme.palette.common.dollar,
                    marginBottom: "1.25em",
                  }}
                  align={matchesSM ? "center" : undefined}
                >
                  {project.description}
                </Typography>
              </Grid>
              <Grid item container direction="column">
                <Grid item>
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ fontSize: matchesSM ? "1.25rem" : "1rem" }}
                    align={matchesSM ? "center" : undefined}
                  >
                    Functionalities
                  </Typography>
                </Grid>
                <Grid item>
                  <List disablePadding>
                    {project.functionalities.map((functionality) => (
                      <Fragment key={functionality.id}>
                        <ListItem classes={{ root: classes.listItem }}>
                          <ListItemIcon>
                            <FiberManualRecordOutlinedIcon
                              fontSize="small"
                              style={{
                                width: "1.5em",
                                height: "1.5em",
                                fill: theme.palette.common.dollar,
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText classes={{ primary: classes.listText }}>
                            {functionality.description}
                          </ListItemText>
                        </ListItem>
                        {functionality.hasOwnProperty("options") &&
                          functionality.options.length > 0 && (
                            <List style={{ marginLeft: "3em" }}>
                              {functionality.options.map((option, index) => (
                                <ListItem
                                  key={index}
                                  classes={{ root: classes.listItem }}
                                >
                                  <ListItemIcon style={{ minWidth: 40 }}>
                                    <FiberManualRecordIcon
                                      fontSize="small"
                                      style={{
                                        width: "1em",
                                        height: "1em",
                                        fill: theme.palette.common.dollar,
                                      }}
                                    />
                                  </ListItemIcon>
                                  <ListItemText
                                    classes={{ primary: classes.listText }}
                                  >
                                    {option}
                                  </ListItemText>
                                </ListItem>
                              ))}
                            </List>
                          )}
                      </Fragment>
                    ))}
                  </List>
                </Grid>
                <Grid
                  item
                  container
                  direction={matchesXXS ? "column" : "row"}
                  alignItems={matchesXXS ? "center" : undefined}
                  justify={matchesSM ? "center" : undefined}
                  style={{ marginTop: "3em" }}
                >
                  {selectedProject.map((project) =>
                    project.hasOwnProperty("liveURL") ? (
                      <Fragment key={project.id}>
                        <Grid
                          item
                          style={{
                            marginRight: matchesXXS
                              ? 0
                              : matchesMD
                              ? "1.2em"
                              : "2em",
                          }}
                        >
                          <Button
                            variant="outlined"
                            href={`${project.liveURL}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.button}
                            size="large"
                            style={{
                              padding: matchesXXS
                                ? ".65em 2.5em"
                                : matchesSM
                                ? ".5em 1.5em"
                                : matchesMDX
                                ? ".5em .75em"
                                : undefined,
                              marginBottom: matchesXXS ? "1.5em" : 0,
                            }}
                          >
                            Live Project
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button
                            variant="outlined"
                            href={`${project.repo}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.button}
                            size="large"
                            style={{
                              padding: matchesXXS
                                ? ".65em 2.5em"
                                : matchesSM
                                ? ".5em 1.5em"
                                : matchesMDX
                                ? ".5em .75em"
                                : undefined,
                            }}
                          >
                            GitHub Link
                          </Button>
                        </Grid>
                      </Fragment>
                    ) : (
                      <Grid item>
                        <Button
                          variant="outlined"
                          href={`${project.repo}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={classes.button}
                          size="large"
                        >
                          GitHub Link
                        </Button>
                      </Grid>
                    )
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );

  useEffect(() => {
    // const pageHeight = document.getElementById("portfolio").clientHeight;
    // console.log("Portfolio section height " + pageHeight);

    const portfolioHeight = 848;
  });

  return (
    <Grid
      item
      container
      direction="column"
      style={{ paddingLeft: matchesSM ? 0 : matchesMD ? "8.33333%" : "25%" }}
      id="portfolio"
    >
      {!isSelected ? allProjects : showSelectedProject}
    </Grid>
  );
};

export default Portfolio;
