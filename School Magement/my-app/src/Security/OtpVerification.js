import React, {Component} from 'react';

import Axios from 'axios'; 
import Swal from 'sweetalert2';

 

import './OtpVerification.css'



class OtpVerification extends Component {

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

          this.props.history.push("/resetpassword");

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
        <section className="col-lg-6 col-lg-offset-3 resetpswcontainer">
          <br />
          <h2 className="signin">OTP Verification</h2><hr/><br/>
          <div className="col-lg-12 indication">Enter the OTP sent on your registered email.</div>


          <br />
          <div className="row">
            <form>
              <div className="col-lg-12 ">
                <div className="col-lg-10 col-lg-offset-1  text-left resetlable">
                  <br />
                  <label className="lable3" htmlFor="email ">
                  OTP<span className="asterik">*</span>{" "}
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
                      placeholder="please enter otp"
                      onChange={this.handleChange.bind(this)}
                    />
                  </div>
                </div>
              </div>
              <br />
              
              <div className="col-lg-12">
                <button
                  className=" btn btn-primary   subButton b1"
                  onClick={this.handleSubmit.bind(this)}
                >
                  Verify
                </button>
              </div> 
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default  OtpVerification;