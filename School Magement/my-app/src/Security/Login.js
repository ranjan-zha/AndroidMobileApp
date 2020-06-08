import React, { Component } from "react";

import Axios from "axios";
import Swal from "sweetalert2";

import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",

      password: ""
    };
  }

  handleChange(event) {
    var name = event.currentTarget.name;
    this.setState({ [name]: event.currentTarget.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    var formValues = {
      email: this.state.email,

      password: this.state.password
    };

    Axios.post("http://localhost:3003/api/users/post/login", formValues)
      .then(response => {
        if (response.data.message === "Successfully Logged In") {
          Swal.fire("Welcome to Dashboard!", "", "success");
          localStorage.setItem("token", response.data.token);
          console.log("data after login ", response.data);

          this.props.history.push("/");

          //         if(response.data.roles.includes("admin")){
          //         	this.props.history.push("/admin-dashboard");
          //         }else if(response.data.roles.includes("teacher")){
          // this.props.history.push("/teacher-dashboard");
          //         }else if(response.data.roles.includes("student")){
          //         	this.props.history.push("/student-dashboard");
          //         }else if(response.data.roles.includes("principal")){
          //         	this.props.history.push("/principal-dashboard");
          //         }
        } else {
          Swal.fire(response.data.message, "", "error");
        }
      })
      .catch(error => {
        console.log("Error occured in Login", error);
        Swal.fire("Oops...", "Something is wrong! <br/>" + error, "error");
      });
  }
  render() {
    return (
      <div className="row">
        <section className="col-lg-4 col-lg-offset-4 logincontainer">
          <h2><i className="far fa-user-circle"></i></h2>
          <h4 className="signin">Sign in</h4>
         
          <br />
          <div className="row">
            <form>
              <div className="col-lg-12 ">
                <div className="col-lg-8 col-lg-offset-2  text-left">
                  <br />
                  <label className=" lable3" htmlFor="email ">
                    User Id<span className="asterik">*</span>{" "}
                  </label>
                  <div className="input-group">
                    <span className="input-group-btn">
                      <button
                        className="btn btn-default inputBox"
                        type="button"
                      >
                        <i className="fas fa-user"></i>
                      </button>
                    </span>
                    <input
                      type="text"
                      className="form-control inputBox"
                      name="email"
                      placeholder="email"
                      // value={this.state.carbrand}
                      onChange={this.handleChange.bind(this)}
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="col-lg-8 col-lg-offset-2  text-left">
                  <br />
                  <label className=" lable4" htmlFor="password">
                    Password<span className="asterik">*</span>{" "}
                  </label>
                  <div className="input-group">
                    <span className="input-group-btn">
                      <button
                        className="btn btn-default inputBox"
                        type="button"
                      >
                        <i className="fas fa-lock"></i>
                      </button>
                    </span>
                    <input
                      type="password"
                      className="form-control inputBox"
                      name="password"
                      placeholder="password"
                      // value={this.state.carbrand}
                      onChange={this.handleChange.bind(this)}
                    />
                  </div>
                </div>
              </div>
              <br />
              <div className="col-lg-12 bottomlable">
                
                <div className="col-lg-12">
                <a href="http://localhost:3000/signup">Sign up</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://localhost:3000/resetpassword">Forgot password ?</a>
                </div>
              </div>
              <div className="col-lg-12">
                <button
                  className=" btn btn-primary   subButton b1"
                  onClick={this.handleSubmit.bind(this)}
                >
                  LogIn
                </button>
              </div> 
            </form>
          </div>
        </section>
      </div>
    );
  }
}
