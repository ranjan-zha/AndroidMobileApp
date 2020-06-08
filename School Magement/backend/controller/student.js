const mongoose = require('mongoose');

const Student = require('../models/student.js');


exports.insert_student = (req,res,next)=>{

		if(req.body.type === "Submit"){
			console.log("Inside insert_student function = ", req.body);

			var student = new Student({
				
				_id 		: new mongoose.Types.ObjectId(),
				fName 		: req.body.fName,
				mName 		: req.body.mName,
				lName 		: req.body.lName,
				dob 		: req.body.dob,
				email 		: req.body.email,
                phone 		: req.body.phone,
                parentphone : req.body.parentphone,
				standard 	: req.body.standard,
				pincode 	: req.body.pincode,
				gender 		: req.body.gender,
                school  	: req.body.school,
                address    	: req.body.address,
                country  	: req.body.country,
                state   	: req.body.state,
                city        : req.body.city,
				createdAt 	: new Date(),
				createdBy 	: "ranjan_zha"
			});

			student
				.save()
				.then((data)=>{

			        res.status(200).json({
			            "message": "Student data inserted Successfully",
			        });
				})
				.catch((error)=>{
					console.log("error while inserting student = ", error);
					res.status(500).json({
						"message" : "Some error occured while inserting student",
						"error"   : error
					})
				});
				console.log("inside cntroller if block...");

		}else{

			Student.update(
					{"_id" : req.body.studid},
					{$set : {
						fName 		: req.body.fName,
						mName 		: req.body.mName,
						lName 		: req.body.lName,
						dob 		: req.body.dob,
						email 		: req.body.email,
						phone 		: req.body.phone,
						parentphone : req.body.parentphone,
						standard 	: req.body.standard,
						pincode 	: req.body.pincode,
						gender 		: req.body.gender,
						school  	: req.body.school,
						address    	: req.body.address,
						country  	: req.body.country,
						state   	: req.body.state,
						city        : req.body.city,
					}}
				)
				.then((data)=>{
					console.log("data after update = ",data);
			        res.status(200).json({
			            "message": "Student data Updated Successfully",
			        });
				})
				.catch((error)=>{
					console.log("error while updating student = ", error);
					res.status(500).json({
						"message" : "Some error occured while updating student",
						"error"   : error
					})
				});
				console.log("inside cntroller else block...")
			}

};
exports.get_oneStudent = (req,res,next)=>{
	console.log("Inside get_oneStudent function");
	var studid = req.params.studid;

	Student
		.findOne({"_id" : studid})
		.then((student)=>{
			console.log("student = ", student);
			res.status(200).json({student});
		})
		.catch((error)=>{
			console.log("Error while getting One student data. ", error);
			res.status(500).json({
				"message" : "Some error occured while getting One student data",
				"error"   : error
			})
		});
};

exports.get_searchstud_name = (req,res,next)=>{
	console.log("Inside get_student_name function");
	var stud_name = req.params.stud_name;
	console.log("stud_name = ",stud_name);

	if(stud_name === "Show All"){
		var selector = {};
		
	}else{
		var selector = {fName : stud_name};
	}

	Student
		.find(selector)
		.then((students)=>{
			console.log("students = ", students);
			res.status(200).json({students});
		})
		.catch((error)=>{
			console.log("Error while getting employee data. ", error);
			res.status(500).json({
				"message" : "Some error occured while getting employee data",
				"error"   : error
			})
		});
};


exports.get_studentList = (req,res,next)=>{
		console.log("Inside get_employeeList function");

		Student
			.find()
			.then((student)=>{
				console.log("student = ", student);
		        res.status(200).json({student});
			})
			.catch((error)=>{
				console.log("Error while getting student data. ", error);
				res.status(500).json({
					"message" : "Some error occured while getting student data",
					"error"   : error
				})
			});
};



exports.delete_student = (req,res,next)=>{
	var studid = req.params.studid;
	console.log("student id  = ",studid);

	Student.remove({"_id" : studid})
			.then(data=>{
				res.status(200).json(data);
			})
			.catch((error)=>{
				console.log("Error while deleting employee = ", error);
				res.status(500).json({
					"message" : "Some error occured while deleting employee data",
					"error"   : error
				})
			});

};