import React, {Component } from 'react';

import Axios from 'axios'; 
import Swal from 'sweetalert2';

import './Signup.css'

export default  class Signup extends Component{
    constructor(props){
        super(props);
        this.state ={
          firstname : "",
          lastname  : "",
          email     : "",
          phone     : "",
          password  : "",
          cpassword : ""  
          
        }
      }

      handleChange(event){
		var name = event.currentTarget.name;
		this.setState({ [name] : event.currentTarget.value });
  }
  showpassword(event) {
        var x = document.getElementById("password");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }
  
     handleSubmit(event){
		event.preventDefault();
		var formValues = {
		      firstname : this.state.firstname,
          lastname  : this.state.lastname,
          email     : this.state.email,
          phone     : this.state.phone,
          password  : this.state.password,
          cpassword : this.state.cpassword  
			
         }

         Axios.post("http://localhost:3003/api/users/post/signup",formValues)
			.then(response =>{ 
				Swal.fire("Congrats!", "Your account has been created","success");
				this.props.history.push("/login");
			})
			.catch( error => {
				console.log("Error occured during Signup", error);
				Swal.fire("Oops...","Something is wrong! <br/>"+ error, "error")
			})
        }
    render(){
        return(
        <div className="row">
        <section className="col-lg-8 col-lg-offset-2 signupcontainer">
          <h3>Welcome to user registertration...!</h3>
          <hr />
          <br />
          <div className="row">
            <form >
                <div className="col-lg-12 ">
                <div className="col-lg-4 col-lg-offset-2  text-left"><br/>
                <label className="lable1" htmlFor="firstname ">
                  First name<span className="asterik">*</span>{" "}
                </label>
                <div className="input-group">
                  <span className="input-group-btn">
                    <button className="btn btn-default inputBox" type="button">
                      <i className="fas fa-user"></i>
                    </button>
                  </span>
                  <input
                    type="text"
                    className="form-control inputBox"
                    name="firstname"
                    placeholder="first name"
                    value={this.state.carbrand}
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
              </div>
              <div className="col-lg-4  text-left"><br/>
                <label className=" lable2" htmlFor="lastname ">
                  last name<span className="asterik">*</span>{" "}
                </label>
                <div className="input-group">
                  <span className="input-group-btn">
                    <button className="btn btn-default inputBox" type="button">
                      <i className="fas fa-user"></i>
                    </button>
                  </span>
                  <input
                    type="text"
                    className="form-control inputBox"
                    name="lastname"
                    placeholder="last name"
                    value={this.state.carbrand}
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
              </div>
              
                </div>
                <div className="col-lg-12 ">
                <div className="col-lg-8 col-lg-offset-2  text-left"><br/>
                <label className=" lable3" htmlFor="email ">
                Email<span className="asterik">*</span>{" "}
                </label>
                <div className="input-group">
                  <span className="input-group-btn">
                    <button className="btn btn-default inputBox" type="button">
                      <i className="fas fa-envelope"></i>
                    </button>
                  </span>
                  <input
                    type="text"
                    className="form-control inputBox"
                    name="email"
                    placeholder="email"
                    value={this.state.carbrand}
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
              </div>
             
                </div>
                <div className="col-lg-12 ">
                <div className="col-lg-4 col-lg-offset-2  text-left"><br/>
                <label className=" lable5" htmlFor="password">
                Password<span className="asterik">*</span>{" "}
                </label>
                <div className="input-group">
                  <span className="input-group-btn">
                    <button className="btn btn-default inputBox" type="button">
                      <i className="fas fa-key"></i>
                    </button>
                  </span>
                  <input
                    type="password"
                    className="form-control inputBox"
                    name="password"
                    placeholder="password"
                    value={this.state.carbrand}
                    onChange={this.handleChange.bind(this)}
                    id="password"
                    
                  />
                </div>
              </div>
              <input type="checkbox" onClick={this.showpassword.bind(this)}></input>
              <div className="col-lg-4  text-left"><br/>
                <label className=" lable6" htmlFor="cpassword">
                  Confirm password<span className="asterik">*</span>{" "}
                </label>
                <div className="input-group">
                  <span className="input-group-btn">
                    <button className="btn btn-default inputBox" type="button">
                      <i className="fas fa-key"></i>
                    </button>
                  </span>
                  <input
                    type="password"
                    className="form-control inputBox"
                    name="cpassword"
                    placeholder="confirm password"
                    value={this.state.carbrand}
                    onChange={this.handleChange.bind(this)}
                  /> 
                </div>
              </div>
              
                </div>
                <div className="col-lg-12">
                        <div className="col-lg-8 col-lg-offset-2  text-left"><br/>
                        <label className=" lable4" htmlFor="phone">
                        Phone<span className="asterik">*</span>{" "}
                        </label>
                        <div className="input-group">
                        <span className="input-group-btn">
                            <button className="btn btn-default inputBox" type="button">
                            <i className="fas fa-mobile"></i>
                            </button>
                        </span>
                        <input
                            type="text"
                            className="form-control inputBox"
                            name="phone"
                            placeholder="phone"
                            value={this.state.carbrand}
                            onChange={this.handleChange.bind(this)}
                        /> 
                        </div>
                    </div>
                    
                </div><br/>

                <div className="col-lg-12">
                    
                    <button
              className=" btn btn-primary   subButton b1"
              onClick={this.handleSubmit.bind(this)}
            >
              Register
            </button></div>
            
            </form>
          </div>
          
          
          </section>
          </div>
        )
    }
}