import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import moment from "moment";

import { useDispatch } from "react-redux";
import { likePost, deletePost } from "../../../actions/posts";
const PostTri = ({ post, setCurrentId }) => {
  {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem("profile"));

    return (
      <>
        <div className="col-lg-4 col-md-6">
          <div className="single-destination-grid text-center">
            <div className="thumb">
              {/* <img
                      src={publicUrl + "assets/img/destination-list/8.png"}
                      alt="img"
                    /> */}
              <img
                src={
                  post.selectedFile ||
                  "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                }
              />
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
              <h3 className="title">{post.name}</h3>
              <p className="content">{post.message}</p>
              <Link className="btn btn-gray" to="/destination-details">
                <span>
                  Explore
                  <i className="la la-arrow-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="btn-wrapper text-center">
            <Link className="btn btn-yellow mt-4" to="/destination-list-v2">
              <span>
                Load More
                <i className="la la-arrow-right" />
              </span>
            </Link>
          </div>
        </div>
      </>
    );
  }
};

export default PostTri;
