import React, { Component } from "react";
import Navbar from "./global-components/navbar";
import Form from "./task/taskForm";
import { Link } from "react-router-dom";
import Footer from "./global-components/footer";
import Page_header from "./global-components/page-header";
import DatePicker from "react-datepicker";
import moment from "moment";
// import Form from './tas'

import "react-datepicker/dist/react-datepicker.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

const tlForm = <Form />;
class Plan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueOfInput: new Date(),
      valueOfInput2: new Date(),
      valueDate: "",
      listForm: [],
      toggle: false,
    };

    this.getData1 = this.getData1.bind(this);
    this.getData2 = this.getData2.bind(this);
    this.displayData = this.displayData.bind(this);
  }

  getData1(date) {
    this.setState({
      valueOfInput: date,
    });
    console.log(this.state.valueOfInput);
  }

  getData2(date) {
    this.setState({
      valueOfInput2: date,
    });
    console.log(this.state.valueOfInput2);
  }

  displayData(e) {
    e.preventDefault();

    const date1 = this.state.valueOfInput;
    const date2 = this.state.valueOfInput2;
    const cantim = Math.abs(date1 - date2);
    const tri1 = Math.round(cantim / (1000 * 60 * 60 * 24) + 1);

    this.setState({
      valueDate: tri1,
      listForm: loopForm(tlForm, tri1),
      toggle: true,
    });
    console.log(typeof tri1);
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";
    const listForm = this.state.listForm;

    return (
      <>
        <Navbar />
        <Page_header headertitle="Plan" />
        <form onSubmit={this.displayData}>
          {/* <div className="search-area tp-main-search-area viaje-go-top"> */}
          <div className="container">
            <div className="tp-main-search">
              <div className="row">
                <div className="col-lg-3 col-md-3 order-2 labelInput">
                  {/* <button className="btn btn-yellow" onClick={this.displayData}> Create Plan</button> */}
                  {/* <Link className="btn btn-yellow" onClick={this.displayData}><i className="#" /> Create Plan</Link> */}
                  <span>Insert</span>
                </div>
                <div className="col-lg-6 col-md-6 order-lg-6">
                  <div className="tp-search-single-wrap float-left">
                    <div className="tp-search-date tp-departing-date-wrap w-50 float-left">
                      <DatePicker
                        selected={this.state.valueOfInput}
                        onChange={this.getData1}
                        name="departing-date"
                        dateFormat="MM/dd/yyyy"
                      />

                      <i className="fa fa-calendar-minus-o" />
                    </div>
                    <div className="tp-search-date tp-returning-date-wrap w-50 float-left">
                      {/* <input type="text" className="returning-date" placeholder="Returning"  /> */}
                      <DatePicker
                        selected={this.state.valueOfInput2}
                        onChange={this.getData2}
                        name="returning-date"
                        dateFormat="MM/dd/yyyy"
                      />
                      <img
                        src={publicUrl + "assets/img/icons/2.png"}
                        alt="icons"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 order-12">
                  <button className="btn btn-yellow" onClick={this.displayData}>
                    {" "}
                    Create Plan
                  </button>
                  {/* <Link className="btn btn-yellow" onClick={this.displayData}><i className="#" /> Create Plan</Link> */}
                </div>
              </div>
              {/* <div className="row"> */}
              {listForm.map((item, index) => {
                return (
                  <div className="row" key={index}>
                    {item}
                  </div>
                );
              })}
              {/* <Form  />     */}
              {/* </div> */}
              {this.state.toggle && (
                <div className="card-footer text-center">
                  {" "}
                  <button
                    type="submit"
                    className="btn btn-primary text-center colorbtn"
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>
            {/* <h1>{this.state.valueDate}</h1>  */}
          </div>
        </form>
        <Footer />
      </>
    );
  }
}

function loopForm(form, n) {
  return Array.from(new Array(n), () => form);
}

export default Plan;
