import React,{ Component} from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';
import moment from 'moment';

import { MDBDataTable } from 'mdbreact';

import ReactHTMLTableToExcel from 'react-html-table-to-excel';

import '@fortawesome/fontawesome-free/css/all.min.css';

import './Studentslist.css';

export default class Studentslist extends Component{
    constructor(props){
        super(props);
        this.state = {
			studentDetails : [],
		}

    }

    componentDidMount(){
        this.getStudData();
    }
    getStudData(){
        Axios.get("http://localhost:3003/api/student/get/list")
        .then((response)=>{
            console.log("response = ",response);
            if(response.data.student){
                this.setState({
                   studentDetails : response.data.student,
                });
            }
        })
        .catch((error)=>{
            console.log("Error during get Data = ", error);
            Swal.fire("Oops...","Something went wrong! <br/>"+error, "error");
        });
	   }
	   
    getNameStudent(stud_name){
		Axios.get("http://localhost:3003/api/student/get/list/"+stud_name)
			 .then((response)=>{
			 	console.log("response = ",response.data);
			 	if(response.data.students){
			 		this.setState({
						studentDetails : response.data.students,
			 		});
			 	}
			 })
			 .catch((error)=>{
			 	console.log("Error during get Data = ", error);
			 	Swal.fire("Oops...","Something went wrong! <br/>"+error, "error");
			 });		
	}

	searchName(event){
		var stud_name = event.currentTarget.value;
		this.getNameStudent(stud_name);
	}

    deleteStud(event){
		event.preventDefault();	
		var studid = event.currentTarget.id.substr(2);
		console.log("studentId = ",studid);

		Swal.fire({
		  title: 'Are you sure, you want to Delete this Student?',
		  text: 'You will not be able to recover this record!',
		  icon: 'warning',
		  showCancelButton: true,
		  confirmButtonColor: '#d33',
  		  cancelButtonColor: '#3085d6',		  
		  confirmButtonText: 'Yes, delete it!',
		  cancelButtonText: 'No, keep it'
		}).then((result) => {
		  if (result.value) {
		  	Axios.delete("http://localhost:3003/api/student/delete/"+studid)
		  		.then((data)=>{
		  			console.log("data = ",data);
		  			if(data.data.deletedCount > 0){
						this.getStudData();
					    Swal.fire(
					      'Deleted!',
					      'Student Record has been deleted successfully',
					      'success'
					    )
		  			}else{
					    Swal.fire(
					      'Sorry, Something is Wrong!',
					      'Student Record NOT deleted',
					      'error'
					    )		  				
		  			}
		  		})
		  		.catch((err)=>{
		  			console.log("error while deleting student = ",err);
					    Swal.fire(
					      'Some Error Occured!',
					      ''+err,
					      'error'
					    )							  			
                  });
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire(
                      'Cancelled',
                      'Your Student Record is NOT Deleted :)',
                      'error'
                    )
                  }
                })		
            }


    render(){
		
        return(
            <section>
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 studentlistcontainer">
					<h1> Student List </h1>
					<div> <input type="text" placeholder="search" 
					onChange={this.searchName.bind(this)}></input></div>

					<ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="studentslist"
                    sheet="tablexls"
                    buttonText="Download as XLS"/>

					<table id="table-to-xls" className="table table-stripped table-hovered table-bordered"> 
						<thead> 
							<tr>
								<th>Sr</th>
								<th>Student Name</th>
								<th>Date of birth</th>
                                <th>School</th>
                                <th>Class</th>
                                <th>Gender</th>
								<th>Email</th>
								<th>Phone</th>
                                <th>Parent Phone</th>
                                <th>Address</th>
                                <th>Country</th>
                                <th>State</th>
                                <th>City</th>
								<th>Pincode</th>
                                <th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{
								this.state.studentDetails.length > 0
								?
									this.state.studentDetails.map((stud,index)=>{
										return(
											<tr key={index}>
												<td>{index+1}</td>
												<td>{stud.fName+"  "+stud.lName}</td>
												<td>{moment(stud.dob).format("Do MMM YYYY")}</td>
                                                <td>{stud.school}</td>
                                                <td>{stud.standard}</td>
                                                <td>{stud.gender}</td>
												<td>{stud.email}</td>
												<td>{stud.phone}</td>
                                                <td>{stud.parentphone}</td>
                                                <td>{stud.address}</td>
                                                <td>{stud.country}</td>
                                                <td>{stud.state}</td>
                                                <td>{stud.city}</td>
                                                <td>{stud.pincode}</td>
												<td> 
													<a href={"/studentform/"+stud._id}> <i id={"e-"+stud._id} className="fa fa-edit editbutton" title="Click to Edit"> </i> </a> 
													<i id={"d-"+stud._id} className="fa fa-trash deletebutton" title="Click to Delete" onClick={this.deleteStud.bind(this)}> </i>
												</td>
											</tr>
										)
									})
								:
									<tr> 
										<td colSpan="9"> Sorry... No Data available! </td>
									</tr>
							}
						</tbody>
					</table> 
	    		</div>
            </section>
        )
    }
}