import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import $ from 'jquery';

import './Sidebar.css';

export default class Sidebar extends Component {
    render(){

        $(document).ready(function(){
            $("#flip").click(function(){
              $("#panel").toggle("medium");
            });
          });

        return(
            <section className="row">
                <div className="col-lg-12  text-left sidebar">
                    <ul className="ul leftmenu">
                        <li className="li" id="flip"><Link to="/" className=" link"><i className="fas fa-tachometer-alt"></i>&nbsp; <span  className="n">Dashboard</span> </Link></li>
                            <div id="panel">
                                <h5><i class="far fa-circle"></i> &nbsp;Admin</h5>
                                <h5><i class="far fa-circle"></i> &nbsp;Student</h5>
                                <h5><i class="far fa-circle"></i> &nbsp;Principle</h5>
                            </div>
                            
                        <li className="li"><Link to="/studentform"className=" link"><i className="fas fa-edit"></i>&nbsp; <span>Form
                        </span> </Link></li>
                        <li className="li"><Link to="/studentprofile" className="link"><i className="fas fa-user-alt"></i>&nbsp; <span>Profile</span></Link></li>
                        <li className="li"><Link to="/student/get/list"className=" link"><i className="fas fa-file-alt"></i>&nbsp; <span>StudentsList</span> </Link></li>
                    </ul>
                </div>
            </section>
        )
    }
}