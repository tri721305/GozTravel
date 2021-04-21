import React, {Component} from 'react'
import Navbar from '../components/global-components/navbar'
import Form from '../components/task/taskForm'
import {Link} from 'react-router-dom'
import Footer from './global-components/footer'
import Page_header from './global-components/page-header'
import DatePicker from 'react-datepicker'
import moment from 'moment'


class PlanTri extends Component {
    constructor(props){
        super(props);
        this.state = {
            dateBegin:'',
            dateEnd:'',
            listForm: []
        }

        this.getDataBegin = this.getDataBegin.bind(this)
        this.getDataEnd = this.getDataEnd.bind(this)
        this.displayData = this.displayData.bind(this)
    }

    getDataBegin(e){
        this.setState({
           dateBegin: e.target.value
        })
        
    }

    getDataEnd(e){
        
    }


    displayData(){
        this.setState({
            x: !this.state.x
        })
        console.log(this.state.dateBegin)
    }

    render(){
        let publicUrl = process.env.PUBLIC_URL+'/';
        let imagealt = 'image'  ;
        const x = this.state.x;
        return (
            <>
            <Page_header headertitle='Plan' />
                {/* <div className="search-area tp-main-search-area viaje-go-top"> */}
                    <div className="container">
                        <div className="tp-main-search">
                            <div className="row">
                                <div className="col-lg-6 col-md-8 order-lg-6">
                                    <div className="tp-search-single-wrap float-left">
                                        <div className="tp-search-date tp-departing-date-wrap w-50 float-left">
                                            <input type='text' className="departing-date" placeholder="Departing" onChange={this.getData} />
                                            
                                            <i className="fa fa-calendar-minus-o" />
                                        </div>
                                        <div className="tp-search-date tp-returning-date-wrap w-50 float-left">
                                            <input type="date" className="returning-date" placeholder="Returning"  />
                                            <img src={publicUrl+"assets/img/icons/2.png"} alt="icons" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 order-12">
                                    {/* <input type='text' onChange={this.getData}/> */}
                                    {/* <input type='date' onChange={this.getData} placeholder="hi" /> */}
                                    {/* <DatePicker onChange={(e) => this.getData(e)} selected={this.state.dateBegin} /> */}
                                    <button type='button' onClick={this.displayData}>Click</button>
                                    {/* <Link className="btn btn-yellow" to="/"><i className="#" /> Create Plan</Link> */}
                                    {/* <Link className="btn btn-yellow" onClick={this.displayData}><i className="#" /> Create Plan</Link> */}
                                </div>
                                {/* <Form /> */}
                            </div>
                        </div>
                         {x? <h1>{this.state.dateBegin}</h1> :<></>}

                    </div>
                {/* </div> */}
            <Footer />
            </>
        )
    }
}



export default PlanTri;