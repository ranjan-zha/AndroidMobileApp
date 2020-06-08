import React, { Component } from "react";
import Axios from "axios";
import Swal from "sweetalert2";

import "./ForgotPassword.css";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

  handleChange(event) {
    var name = event.currentTarget.name;
    this.setState({ [name]: event.currentTarget.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    var formValues = {
      email: this.state.email
    };

    Axios.post("http://localhost:3003/api/users/post/forgotpassword", formValues)
      .then(response => {
        console.log("Form values==", formValues.email);
        console.log("Form values==", response);
       
        if (response.data.email === formValues.email) {
          Swal.fire("OTP has been sent on your email !", "", "success");
          this.props.history.push("/otpverification");
        } else {
          Swal.fire("Please enter valid email id", "", "error");
          this.props.history.push("/forgotpassword");
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
          <h2 className="signin">Forgot password ?</h2>
          <hr />
          <br />
          <div className="col-lg-12 indication">
            Enter the email address you used to register.
          </div>
          <br />
          <div className="row">
            <form>
              <div className="col-lg-12 ">
                <div className="col-lg-10 col-lg-offset-1  text-left resetlable">
                  <br />
                  <label className="lable3" htmlFor="email ">
                    Email<span className="asterik">*</span>{" "}
                  </label>
                  <div className="input-group">
                    <span className="input-group-btn">
                      <button
                        className="btn btn-default inputBox"
                        type="button"
                      >
                        <i
                          className="fas fa-envelope
                        "
                        ></i>
                      </button>
                    </span>
                    <input
                      type="text"
                      className="form-control inputBox"
                      name="email"
                      placeholder="email"
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
                  Reset
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default ForgotPassword;
