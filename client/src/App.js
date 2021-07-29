import React from "react";
// import { Container } from "@material-ui/core";
// import { useDispatch } from "react-redux";
import {
  BrowserRouter,
  Switch,
  Route,
  HashRouter,
  Redirect,
} from "react-router-dom";

import Navbar from "./components/Navbar/navbar";
import HomeCreate from "./components/Home/Home";
import Home from "./components/home-v1";
import Auth from "./components/Auth/Auth";
import About from "./components/about";
import TourDetails from "./components/tour-details";
import DestinationList from "./components/destination-list";
import DestinationListV2 from "./components/destination-list-v2";
import NavbarVS2 from "./components/Navbar/navbarvs2";
import Plan from "./components/plan1";
import UserProfilePage from "./components/user-profile";
import PlanDetails from "./components/PlanDetail/Plandetails";
const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <div>
      {/* <HashRouter basename="/"> */}
      <BrowserRouter>
        {/* <Container maxWidth="lg"> */}
        {/* <Navbar /> <NavbarVS2 /> */}
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" exact component={HomeCreate} />

          <Route path="/posts" exact component={HomeCreate} />
          <Route path="/posts/search" exact component={HomeCreate} />
          <Route path="/posts/:id" component={PlanDetails} />
          <Route path="/tourlist" component={TourDetails} />
          <Route
            path="/auth"
            exact
            component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}
          />
          {/* <Route path="/about" component={About} />
            <Route path="/plan" component={Plan} />
            <Route path="/tourlist" component={TourDetails} />
            <Route path="/destinationlist" component={DestinationList} />
            <Route path="/destinationlistv2" component={DestinationListV2} />
            <Route path="/user" component={UserProfilePage} /> */}
        </Switch>
        {/* </Container> */}
      </BrowserRouter>
      {/* </HashRouter> */}
    </div>
  );
};

export default App;
