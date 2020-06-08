import React,{ Component} from 'react';

import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';

import './Header.css';

export default class Header extends Component {
    render(){
        return(
            <section className="row">
                <div className="col-lg-12 header row">
                    <div className="col-lg-2 logo"><i className="fab fa-accusoft"></i> School</div>
                    <div className="dropdown pull-right userdropdown">
                    <div className=" dropdown-toggle" type="button" data-toggle="dropdown"><i className="fas fa-user userfont">&nbsp;Welcome&nbsp;</i>
                    <span className="caret"></span></div>
                    <ul className="dropdown-menu">
                        <li><a href="/login"><i className="fas fa-sign-in-alt">&nbsp;</i> Sign in</a></li>
                        <li><a href="/signup"><i className="fas fa-user-plus">&nbsp;</i>Register</a></li>
                        <li><a href="/"><i className="fas fa-sign-out-alt">&nbsp;</i> Sign out</a></li>
                    </ul>
                    </div>
                </div>
            </section>
        )
    }
}