import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class History extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="destination-grid-area pd-top-105 viaje-go-top">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-lg-6">
			        <div className="section-title text-center">
			          <h2 className="title">Our History</h2>
			          <p>Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula. Quisque quis pharetra felis. Ut quis consequat orci, at consequat felis.</p>
			        </div>
			      </div>
			    </div>
			    <div className="row justify-content-center">
			      <div className="col-lg-4 col-md-6">
			        <div className="single-destination-grid style-two">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/destination-list/17.png"} alt="img" />
			          </div>
			          <div className="details">
			            <ul className="d-list-meta">
			              <li className="date">2020</li>
			              <li><img src={publicUrl+"assets/img/icons/13.png"} alt="img" /> Idea ? "chua co"</li>
			              <li><img src={publicUrl+"assets/img/icons/14.png"} alt="img" /> Idea ? " chua co ^^ "</li>
			            </ul>
			            <h3 className="title"><Link to="/destination-details">Founded 2020</Link></h3>
			            <p className="content">Content .... Huyen Thanh, Minh Tri</p>
			          </div>
			        </div>
			      </div>  
			      <div className="col-lg-4 col-md-6">
			        <div className="single-destination-grid style-two">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/destination-list/18.png"} alt="img" />
			          </div>
			          <div className="details">
			            <ul className="d-list-meta">
			              <li className="date">2019</li>
			              <li><img src={publicUrl+"assets/img/icons/13.png"} alt="img" /> Idea ?</li>
			              <li><img src={publicUrl+"assets/img/icons/14.png"} alt="img" /> Idea content ?</li>
			            </ul>
			            <h3 className="title"><Link to="/destination-details">The best travel in 2020 ^^</Link></h3>
			            <p className="content">Bach Khoa TPHCM</p>
			          </div>
			        </div>
			      </div> 
			      <div className="col-lg-4 col-md-6">
			        <div className="single-destination-grid style-two">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/destination-list/19.png"} alt="img" />
			          </div>
			          <div className="details">
			            <ul className="d-list-meta">
			              <li className="date">2019</li>
			              <li><img src={publicUrl+"assets/img/icons/13.png"} alt="img" />Content</li>
			              <li><img src={publicUrl+"assets/img/icons/14.png"} alt="img" /> Content</li>
			            </ul>
			            <h3 className="title"><Link to="/destination-details">The Best Travel 2020</Link></h3>
			            <p className="content">Bach Khoa TPHCM</p>
			          </div>
			        </div>
			      </div> 
			    </div>
			  </div>
			</div>
        }
}

export default History