import React, {Component} from 'react';
import { Pie, Bar} from 'react-chartjs-2';
import "./Dashboard.css";
import html2PDF from 'jspdf-html2canvas';

export default class Dashboard extends Component{

    constructor(props){
		super(props);

		this.state = {
			chartData : {
						    datasets: [{
						        
						        data: [100,160, 230, 320],

								backgroundColor: [
					                'rgba(255, 99, 132, 1)',
					                'rgba(155, 199, 132, 1)',
					                'rgba(54, 162, 235, 1)',
					                'rgba(255, 206, 86, 0.9)',
					            ],

						    }],

						    // These labels appear in the legend and in the tooltips when hovering different arcs
						    labels: [
						    	'Alpha Romeo',
						        'Mercedes',
						        'BMW',
						        'Audi'
						    ],
							 options: {
							        scales: {
							            yAxes: [{
							                ticks: {
							                    beginAtZero: true
							                }
							            }]
							        }
							    }						    
						}
		}
    }
    
    componentDidMount(){

        var btn = document.getElementById('btn');
        var page = document.getElementById('page');
        
        btn.addEventListener('click', function(){
        html2PDF(page, {
            jsPDF: {},
            imageType: 'image/jpeg',
            output: './pdf/generate.pdf'
        });
});
    }
 
    render(){
        return(
            <div id="page" >
                <div className="row">
                    <section className="col-lg-12 dashboard">
                       
                        <div className=" col-lg-12">
                        <div className="row">
                        <button id="btn">Generate Pdf</button>
                        <div className="text-left heading">Dashboard</div>
                        <div className="col-lg-3">
                            <div id="f1_container">
                                <div id="f1_card" className="shadow">
                                    <div className="front face">
                                        <div className="face1">
                                            <div className="faceLable">
                                            <i className="fas fa-university"></i>
                                            </div>
                                            <span className="admissionlable">SUCCESS RATE</span>
                                            <span className="numbers">98.02 %</span>
                                         </div>
                                         
                                    </div>
                                    
                                    <div className="back face center">
                                        <p>This is nice for exposing more information about an image.</p>
                                        <p>Any content can go here.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div id="f1_container">
                                <div id="f1_card" className="shadow">
                                    <div className="front face">
                                        <div className="face1">
                                            <div className="faceLable2">
                                            <i className="fas fa-users"></i>
                                                </div>
                                                <span className="admissionlable">STUDENTS</span>
                                                <span className="numbers">60,000</span>
                                                </div>
                                    </div>
                                    <div className="back2 face2 center">
                                        <p>This is nice for exposing more information about an image.</p>
                                        <p>Any content can go here.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div id="f1_container">
                                <div id="f1_card" className="shadow">
                                    <div className="front face">
                                        <div className="face1"><div className="faceLable3">
                                        <i className="far fa-building"></i>
                                            </div>
                                            <span className="admissionlable">CITIES</span>
                                            <span className="numbers">50+</span>
                                            </div>
                                    </div>
                                    <div className="back3 face3 center">
                                        <p>This is nice for exposing more information about an image.</p>
                                        <p>Any content can go here.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div id="f1_container">
                                <div id="f1_card" className="shadow">
                                    <div className="front face">
                                        <div className="face1"><div className="faceLable4">
                                        <i className="far fa-heart"></i>
                                        </div>
                                        <span className="admissionlable">LIKES</span>
                                        <span className="numbers">80,000+</span>
                                        </div>
                                    </div>
                                    <div className="back4 face4 center">
                                        <p>This is nice for exposing more information about an image.</p>
                                        <p>Any content can go here.</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        </div>
                        
                      
                            <div className="col-lg-6 report">
                                    <h3 className="box-title "> Standardwise Admissions</h3>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-lg-10 pichartpadding">
                                        <Pie
                                        data={this.state.chartData}/>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-lg-6 report">
                                <h3 className="box-title ">Male & Female</h3>
                                            <hr/>
                                    <div className="row">
                                        <div className="col-lg-10 pichartpadding">
                                        
                                        <Pie
                                        data={this.state.chartData}/>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-lg-12 barchart report3">
                                <h3 className="box-title ">Standardwise Students</h3>
                                            <hr/>
                                    <div className="row">
                                        <div className="col-lg-8 barchart2">
                                        
                                        <Bar
                                         data={this.state.chartData}/>
                                        </div>
                                    </div>

                                </div>
                       
                        
                        </div>
                        
                    </section>
                   
                </div>
                </div>
                
        )
    }
} 