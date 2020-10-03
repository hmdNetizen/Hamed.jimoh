import React, { useState, useRef, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import FilterListIcon from "@material-ui/icons/FilterList";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import ListItemText from "@material-ui/core/ListItemText";
import Popper from "@material-ui/core/Popper";
import { useTheme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  portfolioContainer: {
    // background: theme.palette.common.darkBrown,
    height: "960px",
  },
  filterIcon: {
    fill: theme.palette.common.dollar,
  },
  menu: {
    background: "#c4c4c4",
  },
  menuItem: {
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
}));

const Portfolio = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid
      item
      container
      direction="column"
      style={{ paddingLeft: matchesSM ? 0 : matchesMD ? "8.33333%" : "25%" }}
      className={classes.portfolioContainer}
    >
      <Grid
        item
        container
        alignItems="center"
        justify="space-between"
        style={{ paddingLeft: "6em", paddingRight: "6em" }}
      >
        <Grid item>
          <Typography variant="h2" gutterBottom>
            Projects
          </Typography>
        </Grid>
        <Grid item>
          <IconButton
            aria-controls="customized-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <FilterListIcon classes={{ root: classes.filterIcon }} />
          </IconButton>
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
            <MenuItem className={classes.menuItem}>
              <ListItemText
                primary="Newest"
                classes={{ primary: classes.listItemText }}
              />
            </MenuItem>

            <MenuItem className={classes.menuItem}>
              <ListItemText
                primary="Name"
                classes={{ primary: classes.listItemText }}
              />
            </MenuItem>

            <MenuItem className={classes.menuItem}>
              <ListItemText
                primary="Oldest"
                classes={{ primary: classes.listItemText }}
              />
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
