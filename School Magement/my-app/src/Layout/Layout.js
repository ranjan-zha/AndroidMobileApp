import React,{Component} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

    import $ from 'jquery';
import Header from '../Header/Header.js';
import Sidebar from '../Sidebar/Sidebar.js';
import Studentform from '../StudentForm/Studentform';
import Studentslist from '../Studentslist/Studentslist.js';
import Profile from '../Studentprofiles/Profile.js';

import './Layout.css';
import Dashboard from '../Dashboard/Dashboard.js';
import Login from '../Security/Login.js';
import Signup from '../Security/Signup.js';
import OtpVerification from '../Security/OtpVerification.js';
import ForgotPassword from '../Security/ForgotPassword.js';
import ResetPassword from '../Security/ResetPassword.js';


export default class Layout extends Component {

    render(){

        $(document).ready(function(){
            $(".bar").click(function() {

                    
                        $(".sidebar").toggleClass("sidebarCollapse");
                        
                        if( $(".sidebarCollapse").hasClass("sidebar"))
                        {
                            $(".logo").html("   ");
                            $("#hide").click(function(){
                                $("span").hide();
                              });
                             
                        }
                        else{

                             $(".logo").html("School");
                             $("#hide").click(function(){
                                $("span").show();
                              });
                                 
                            }

                            $(".maincontent").toggleClass("maincontentCollapse");
                          

                            
                    
            });
          });

        // var isLogin = true;
        return(
            // isLogin ?
            <Router>
                
            <div className="row">
            <div className="row"> <div className=""><div className="col-lg-12"><Header/></div></div></div>
                <div className="row">
                   <div className="col-lg-2 col-sm-2 row pull-left sidebar " id="hide">
                        <i className="fa fa-bars bar"></i><Sidebar/>
                    </div>      
                   <div className="col-lg-10 col-sm-10  maincontent">
                   <div className="col-lg-12 col-sm-12  pages">
                           <Switch>
                               <Route exact path="/" 				 	    component={Dashboard} /> 
                               <Route exact path="/studentform" 		 	component={Studentform} />
                               <Route exact path="/studentform/:studid"     component={Studentform} />
                               <Route exact path="/student/get/list" 		component={Studentslist} />
                               <Route exact path="/studentprofile"	        component={Profile} />
                               <Route exact path="/login"	                component={Login} />
                               <Route exact path="/signup"	                component={Signup} />
                               <Route exact path="/resetpassword"      	    component={ResetPassword} />
                               <Route exact path="/otpverification"      	component={OtpVerification} />
                               <Route exact path="/forgotpassword"      	component={ForgotPassword} />
                               
                               
                               {/* <Route component={PageNotFound} /> */}
                           </Switch>
                   </div>
               </div>
               </div>
            </div>
                
            </Router>
            // :
            // <div className="col-lg-12"><login /></div>
        )
    }
}