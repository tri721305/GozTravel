import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
// import Modal from "../Modal/testModal";
import Modal from "../Modal/testModal";
import moment from "moment";
import { useDispatch } from "react-redux";
const Plan = ({ post, setCurrentId }) => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  let imagealt = "image";

  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <div className="col-lg-4 col-md-6">
      <div className="single-destination-grid text-center">
        <div className="thumb">
          <img src={post.selectedFile} />
        </div>
        <div className="details">
          <div className="tp-review-meta">
            <i className="ic-yellow fa fa-star" />
            <i className="ic-yellow fa fa-star" />
            <i className="ic-yellow fa fa-star" />
            <i className="ic-yellow fa fa-star" />
            <i className="fa fa-star" />
            <span>4.0</span>
          </div>
          <h3 className="title">{post.title}</h3>
          <p className="content">{post.message}</p>
          <Link className="btn btn-gray" to="/destination-details">
            <span>
              Explore
              <i className="la la-arrow-right" />
            </span>
          </Link>

          <Link className="btn btn-gray" to="/addactivities">
            <span>
              Add your activities
              <i className="la la-arrow-right" />
            </span>
          </Link>
          <Modal />
        </div>
      </div>
    </div>
  );
};

export default Plan;
