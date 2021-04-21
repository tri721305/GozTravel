import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, Grow, Grid } from "@material-ui/core";
import { getPosts } from "../../actions/posts";

import Posts from "../Posts/Posts";
import Form from "../Form/Form";

import Navbar from "../global-components/navbar";

import PageHeader from "../global-components/page-header";

import Subscribe from "../section-components/subscribe";

import Footer from "../global-components/footer";

import PlanList from "../PlanList/PlanList";

// import Modal from "../Modal/testModal";
const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  //   const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
      <Navbar />
      <PageHeader headertitle="Plan lists" />
      <PlanList setCurrentId={setCurrentId} />
      <Form setCurrentId={setCurrentId} currentId={currentId} />
      {/* <Modal /> */}
      {/* <Posts setCurrentId={setCurrentId} /> */}
      <Subscribe />
      <Footer />

      {/* <Grow in>
        <Container>
          <PlanList setCurrentId={setCurrentId} />

          <Posts setCurrentId={setCurrentId} />
        </Container>
      </Grow> */}
    </>
  );
};

export default Home;
