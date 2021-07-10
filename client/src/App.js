import React from "react";
import { Container } from "@material-ui/core";
// import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route, HashRouter } from "react-router-dom";
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
const App = () => {
  return (
    <div className="App">
      <HashRouter basename="/">
        {/* <BrowserRouter> */}
        {/* <Container maxWidth="lg"> */}
        {/* <Navbar /> <NavbarVS2 /> */}
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/homecreate" exact component={HomeCreate} />
          <Route path="/auth" exact component={Auth} />
          <Route path="/about" component={About} />
          <Route path="/plan" component={Plan} />
          <Route path="/tourlist" component={TourDetails} />
          <Route path="/destinationlist" component={DestinationList} />
          <Route path="/destinationlistv2" component={DestinationListV2} />
          <Route path="/user" component={UserProfilePage} />
        </Switch>
        {/* </Container> */}
        {/* </BrowserRouter> */}
      </HashRouter>
    </div>
  );
};

export default App;
