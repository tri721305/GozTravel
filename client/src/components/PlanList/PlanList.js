import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import Plan from "./Plan/Plan";
import { CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
const PlanList = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <div className="destination-area viaje-go-top">
      <div className="container-bg mg-top--70">
        <div className="container">
          <div className="row justify-content-center">
            {posts.map((post) => (
              // <div key={post._id}>
              <Plan key={post._id} post={post} setCurrentId={setCurrentId} />
              // </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanList;
