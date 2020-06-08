import React, { Component } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
// import $ from 'jquery';
// import validate from "jquery-validation";

import "./Studentform.css";
// import '../Studentslist/Studentslist.js';

export default class Studentform extends Component {
  constructor() {
    super();
    this.state = {
      submit: true,
      err_firstName: "",
      err_middleName: "",
      err_lastName: "",
      err_company: "",
      err_designation: "",
      err_Dob: "",
      err_address: "",
      buttonText: "Submit",
      firstName: "",
      middleName: "",
      lastName: "",
      dob: "",
      email: "",
      phone: "",
      parentPhone: "",
      address: "",
      state: "",
      city: "",
      country: "",
      school: "",
      pincode: "",
      standard: "",
      gender: "",
      studenstate: [],
      studid: ""
    };
  }
  componentDidMount() {
    // $.validator.addMethod("regLx2", function(value, element, regexpr) {          
    //   return regexpr.test(value);
    // }, "Please enter a valid name.");
    // $("#sendApplication").validate({
    //        rules: {
    //          middleName: {
    //            required: true,
    //            regLx2: /^[a-zA-Z]$/,
    //          }
    //      }
    //      })


    var studid = this.props.match.params.studid;
    console.log(" buttonText =>", this.state.buttonText);
    this.setState({ studid: studid });
    console.log("Sutdent Id", this.state.studid);

    if (studid) {
      console.log("If block...");
      this.setState({ buttonText: "Update" });

      // Fetch the Employee Data using empid.
      Axios.get("http://localhost:3003/api/student/get/" + studid)
        .then(studentData => {
          var studentdata = studentData.data.student;

          console.log("Student data", studentdata);

          this.setState({
            firstName: studentdata.fName,
            middleName: studentdata.mName,
            lastName: studentdata.lName,
            dob: studentdata.dob,
            email: studentdata.email,
            phone: studentdata.phone,
            parentphone: studentdata.parentphone,
            address: studentdata.address,
            state: studentdata.state,
            city: studentdata.city,
            country: studentdata.country,
            school: studentdata.school,
            pincode: studentdata.pincode,
            standard: studentdata.standard,
            gender: studentdata.gender
          });
        })
        .catch(error => {
          console.log("Error while getting StudentData = ", error);
          Swal.fire("Oops...", "Something went wrong <br/>" + error, "error");
        });
    } else {
      console.log("else .. block...");
      this.setState({ buttonText: "Submit" });
    }
  }

  arrayRemove(arr, value) {
    return arr.filter(function(ele) {
      return ele !== value;
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    var submit = true;
    console.log("state values in handdle submit = ", this.state);

    // if($("#sendApplication").valid()){

    // <------------------------------- Insert Data into Db ------------------------>
    if (submit && this.state.submit) {
      var studntDetails = {
        fName: this.state.firstName,
        mName: this.state.middleName,
        lName: this.state.lastName,
        dob: this.state.dob,
        email: this.state.email,
        phone: this.state.phone,
        parentphone: this.state.parentphone,
        standard: this.state.standard,
        pincode: this.state.pincode,
        gender: this.state.gender,
        country: this.state.country,
        school: this.state.school,
        city: this.state.city,
        state: this.state.state,
        address: this.state.address,
        type: this.state.buttonText,
        studid: this.state.studid
      };

      console.log("Details", studntDetails);
      Axios.post("http://localhost:3003/api/student/post", studntDetails)
        .then(response => {
          console.log("Response from API = ", response);
          Swal.fire("Congrats!", "Student Data Submitted Successfully");

          //redirect to emplist
          this.props.history.push("/student/get/list");
        })
        .catch(error => {
          console.log("Error while inserting Form = ", error);
          Swal.fire("Oops...", "Something went wrong <br/>" + error, "error");
        });
    }
  // }
  }

  onlyAlphabet(event) {
    var keycode = event.which || event.keyCode;
    // var value = event.currentTarget.value;

    if (
      (keycode >= 65 && keycode <= 90) ||
      keycode === 8 ||
      keycode === 37 ||
      keycode === 39 ||
      keycode === 46 ||
      keycode === 9
    ) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }
  required(event) {
    event.preventDefault();
    var value = event.currentTarget.value.trim();
    var name = event.currentTarget.name;
    if (!value.length) {
      this.setState({ ["err_" + name]: "This field is required*" });
    } else {
      this.setState({ ["err_" + name]: "" });
    }
  }
  handleChange(event) {
    event.preventDefault();
    var value = event.currentTarget.value;
    var name = event.currentTarget.name;
    console.log("value=>", value, "name=>", name);
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12 row">
          <section className="col-lg-12 formContainer" id="sendApplication">
            <h4 className="text-left formheading">
              {" "}
              Student Registration Form
            </h4>
            <div className=" container-flex  formBody">
              <div className="col-lg-12 formdata">
                <div className="row">
                  <div className="col-lg-6 instructions">
                    <h4 className="headText">Instructions :</h4>
                    <ul>
                      <li>1) Please enter all the mandatory fields.</li>
                      <br />
                      <li>2) Please enter correct data.</li>
                      <br />
                      <li>3) Attatch your good quality photo.</li>
                      <br />
                      <li>4) Select your correct date of birth.</li>
                    </ul>
                  </div>
                  <div className="col-lg-6 profileBlock">
                    <div className="profileImage"></div>
                    <div className="title">
                      {this.state.firstName +
                        " " +
                        this.state.middleName +
                        " " +
                        this.state.lastName}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 inputFields">
                      <h4 className="headText">Personal Informations :</h4>
                      <div className="row">
                        <div className="col-lg-3 input">
                          <label>
                            First Name <span className="requiredField">*</span>
                          </label>
                          <div className="input-group">
                            <span className="input-group-btn" id="basic-addon1">
                              <button
                                className="btn btn-default inputBox"
                                type="button"
                              >
                                <i className="far fa-user"></i>
                              </button>
                            </span>
                            <input
                              type="text"
                              className="form-control inputBox"
                              placeholder="First name"
                              value={this.state.firstName}
                              aria-describedby="basic-addon1"
                              name="firstName"
                              ref="firstName"
                              onKeyDown={this.onlyAlphabet.bind(this)}
                              onBlur={this.required.bind(this)}
                              onChange={this.handleChange.bind(this)}
                            />
                          </div>
                          {this.state.err_firstName ? (
                            <span className="requiredField">
                              {this.state.err_firstName}
                            </span>
                          ) : null}
                        </div>
                        <div className="col-lg-3 input">
                          <label>
                            &nbsp;&nbsp;&nbsp;Middle Name{" "}
                            <span className="requiredField">*</span>
                          </label>
                          <div className="input-group">
                            <span className="input-group-btn" id="basic-addon1">
                              <button
                                className="btn btn-default inputBox"
                                type="button"
                              >
                                <i className="far fa-user"></i>
                              </button>
                            </span>
                            <input
                              type="text"
                              className="form-control inputBox"
                              placeholder="Middle name"
                              value={this.state.middleName}
                              aria-describedby="basic-addon1"
                              name="middleName"
                              ref="middleName"
                              onKeyDown={this.onlyAlphabet.bind(this)}
                              onBlur={this.required.bind(this)}
                              onChange={this.handleChange.bind(this)}
                            />
                          </div>
                          {this.state.err_middlename ? (
                            <span className="requiredField">
                              {this.state.err_middlename}
                            </span>
                          ) : null}
                        </div>
                        <div className="col-lg-3 input">
                          <label>
                            Last Name <span className="requiredField">*</span>
                          </label>
                          <div className="input-group">
                            <span className="input-group-btn" id="basic-addon1">
                              <button
                                className="btn btn-default inputBox"
                                type="button"
                              >
                                <i className="far fa-user"></i>
                              </button>
                            </span>
                            <input
                              type="text"
                              className="form-control inputBox"
                              value={this.state.lastName}
                              placeholder="Last name"
                              aria-describedby="basic-addon1"
                              name="lastName"
                              ref="lastName"
                              onKeyDown={this.onlyAlphabet.bind(this)}
                              onBlur={this.required.bind(this)}
                              onChange={this.handleChange.bind(this)}
                            />
                          </div>
                          {this.state.err_lastname ? (
                            <span className="requiredField">
                              {this.state.err_lastname}
                            </span>
                          ) : null}
                        </div>
                        <div className="col-lg-3 input">
                          <label>
                            {" "}
                            &nbsp;&nbsp;&nbsp;Date of Birth{" "}
                            <span className="requiredField">*</span>
                          </label>
                          <div className="input-group">
                            <span className="input-group-btn" id="basic-addon1">
                              <button
                                className="btn btn-default inputBox"
                                type="button"
                              >
                                <i className="fas fa-calendar-alt"></i>
                              </button>
                            </span>
                            <input
                              type="date"
                              className="form-control inputBox"
                              value={this.state.dob}
                              placeholder="dob"
                              aria-describedby="basic-addon1"
                              required
                              name="dob"
                              ref="dob"
                              onKeyDown={this.onlyAlphabet.bind(this)}
                              onBlur={this.required.bind(this)}
                              onChange={this.handleChange.bind(this)}
                            />
                          </div>
                          {this.state.err_dob ? (
                            <span className="requiredField">
                              {this.state.err_dob}
                            </span>
                          ) : null}
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <div className="col-lg-6 input">
                          <label className="lb1">
                            School Name <span className="requiredField">*</span>
                          </label>
                          <div className="input-group">
                            <span className="input-group-btn" id="basic-addon1">
                              <button
                                className="btn btn-default inputBox"
                                type="button"
                              >
                                <i className="fas fa-school"></i>
                              </button>
                            </span>
                            <input
                              type="text"
                              className="form-control inputBox"
                              value={this.state.school}
                              placeholder="Last school name"
                              aria-describedby="basic-addon1"
                              name="school"
                              ref="school"
                              onKeyDown={this.onlyAlphabet.bind(this)}
                              onBlur={this.required.bind(this)}
                              onChange={this.handleChange.bind(this)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-3 input">
                          <label className="lb2">
                            Class <span className="requiredField">*</span>
                          </label>
                          <div className="input-group">
                            <span className="input-group-btn" id="basic-addon1">
                              <button
                                className="btn btn-default inputBox"
                                type="button"
                              >
                                <i className="fas fa-book"></i>
                              </button>
                            </span>
                            <input
                              type="text"
                              className="form-control inputBox"
                              value={this.state.standard}
                              placeholder="class"
                              aria-describedby="basic-addon1"
                              name="standard"
                              ref="standard"
                              onKeyDown={this.onlyAlphabet.bind(this)}
                              onBlur={this.required.bind(this)}
                              onChange={this.handleChange.bind(this)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-3 input">
                          <label className="lb3">
                            Gender <span className="requiredField">*</span>
                          </label>
                          <div className="input-group">
                            <span className="input-group-btn" id="basic-addon1">
                              <button
                                className="btn btn-default inputBox"
                                type="button"
                              >
                                <i className="fas fa-venus-mars"></i>
                              </button>
                            </span>
                            <input
                              type="text"
                              className="form-control inputBox"
                              value={this.state.gender}
                              placeholder="Gender"
                              aria-describedby="basic-addon1"
                              name="gender"
                              ref="gender"
                              onChange={this.handleChange.bind(this)}
                            />
                          </div>
                        </div>
                      </div>
                      <br />
                      <br />
                      {/* <--------------------------Contact Details----------------------------------> */}

                      <h4 className="headText">Contact Details :</h4>
                      <div className="row">
                        <div className="col-lg-3 input">
                          <label>
                            Mobile No. <span className="requiredField">*</span>
                          </label>
                          <div className="input-group">
                            <span className="input-group-btn" id="basic-addon1">
                              <button
                                className="btn btn-default inputBox"
                                type="button"
                              >
                                <i className="fas fa-phone"></i>
                              </button>
                            </span>
                            <input
                              type="number"
                              maxLength="10"
                              className="form-control inputBox"
                              value={this.state.phone}
                              placeholder="Mobile No."
                              aria-describedby="basic-addon1"
                              name="phone"
                              ref="phone"
                              onChange={this.handleChange.bind(this)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-3 input">
                          <label>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Parent
                            Mobile No. <span className="requiredField">*</span>
                          </label>
                          <div className="input-group">
                            <span className="input-group-btn" id="basic-addon1">
                              <button
                                className="btn btn-default inputBox"
                                type="button"
                              >
                                <i className="fas fa-phone"></i>
                              </button>
                            </span>
                            <input
                              type="number"
                              maxLength="10"
                              className="form-control inputBox"
                              value={this.state.parentphone}
                              placeholder="Parent Mobile No. "
                              aria-describedby="basic-addon1"
                              name="parentphone"
                              ref="parentphone"
                              onChange={this.handleChange.bind(this)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-3 input">
                          <label>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Student
                            address <span className="requiredField">*</span>
                          </label>
                          <div className="input-group">
                            <span className="input-group-btn" id="basic-addon1">
                              <button
                                className="btn btn-default inputBox"
                                type="button"
                              >
                                <i className="fas fa-home"></i>
                              </button>
                            </span>
                            <input
                              type="text"
                              className="form-control inputBox"
                              value={this.state.address}
                              placeholder="address"
                              aria-describedby="basic-addon1"
                              name="address"
                              ref="address"
                              onChange={this.handleChange.bind(this)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-3 input">
                          <label className="lb4">
                            {" "}
                            Email <span className="requiredField">*</span>
                          </label>
                          <div className="input-group">
                            <span className="input-group-btn" id="basic-addon1">
                              <button
                                className="btn btn-default inputBox"
                                type="button"
                              >
                                <i className="fas fa-envelope"></i>
                              </button>
                            </span>
                            <input
                              type="text"
                              className="form-control inputBox"
                              value={this.state.email}
                              placeholder="Email"
                              aria-describedby="basic-addon1"
                              name="email"
                              ref="email"
                              onChange={this.handleChange.bind(this)}
                            />
                          </div>
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <div className="col-lg-3 input">
                          <label className="lb5">
                            Country <span className="requiredField">*</span>
                          </label>
                          <div className="input-group">
                            <span className="input-group-btn" id="basic-addon1">
                              <button
                                className="btn btn-default inputBox"
                                type="button"
                              >
                                <i className="far fa-address-card"></i>
                              </button>
                            </span>
                            <input
                              type="text"
                              className="form-control inputBox"
                              value={this.state.country}
                              placeholder="country"
                              aria-describedby="basic-addon1"
                              name="country"
                              ref="country"
                              onChange={this.handleChange.bind(this)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-3 input">
                          <label className="lb6">
                            State <span className="requiredField">*</span>
                          </label>
                          <div className="input-group">
                            <span className="input-group-btn" id="basic-addon1">
                              <button
                                className="btn btn-default inputBox"
                                type="button"
                              >
                                <i className="far fa-address-card"></i>
                              </button>
                            </span>
                            <input
                              type="text"
                              className="form-control inputBox"
                              value={this.state.state}
                              placeholder="state"
                              aria-describedby="basic-addon1"
                              name="state"
                              ref="state"
                              onChange={this.handleChange.bind(this)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-3 input">
                          <label className="lb7">
                            City <span className="requiredField">*</span>
                          </label>
                          <div className="input-group">
                            <span className="input-group-btn" id="basic-addon1">
                              <button
                                className="btn btn-default inputBox"
                                type="button"
                              >
                                <i className="far fa-address-card"></i>
                              </button>
                            </span>
                            <input
                              type="text"
                              className="form-control inputBox"
                              value={this.state.city}
                              placeholder="city"
                              aria-describedby="basic-addon1"
                              name="city"
                              ref="city"
                              onChange={this.handleChange.bind(this)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-3 input">
                          <label className="lb8">
                            Pin <span className="requiredField">*</span>
                          </label>
                          <div className="input-group">
                            <span className="input-group-btn" id="basic-addon1">
                              <button
                                className="btn btn-default inputBox"
                                type="button"
                              >
                                <i className="fas fa-map-marker-alt"></i>
                              </button>
                            </span>
                            <input
                              type="number"
                              maxLength="6"
                              className="form-control inputBox"
                              value={this.state.pincode}
                              placeholder="pin"
                              aria-describedby="basic-addon1"
                              name="pincode"
                              ref="pincode"
                              onChange={this.handleChange.bind(this)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="row">
                  <br />
                  <button
                    className="col-lg-2 col-lg-offset-5 btn btn-primary subButton b1"
                    onClick={this.handleSubmit.bind(this)}
                  >
                    {this.state.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
