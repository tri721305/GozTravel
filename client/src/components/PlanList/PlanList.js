import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import Plan1 from "./Plan/Plan1";
import { CircularProgress, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import useStyles from "./styles";
const PlanList = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  return !posts.length ? (
    <CircularProgress />
  ) : (
    // <div className="destination-area viaje-go-top">
    //   <div className="container-bg mg-top--70">
    //     <div className="container">
    //       <div className="row justify-content-center">
    //         {posts.map((post) => (
    //           <Plan1 key={post._id} post={post} setCurrentId={setCurrentId} />
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div style={{ marginTop: 40 }}>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={3} md={3}>
            <Plan1 post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PlanList;
