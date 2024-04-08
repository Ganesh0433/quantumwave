"use client"
import React from "react"
import { firebase_app, db, firebaseConfig } from "@/lib/firebase"
import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { InternshipApplication } from "@/lib/libcsv"
import nstyle from './certificate.module.css'
import { initializeApp } from "firebase/app";




const fetchInternData = async (enrollmentNumber: string) => {
    const app = initializeApp(firebaseConfig)
    try {
        const res = await getDoc(doc(db, "internData", enrollmentNumber))
        return res.data()
    } catch (e) {
        throw ("F")
    }
}


export default function Page({ params }: { params: { slug: string } }) {
    const [internData, setInternData] = useState<InternshipApplication>()


    async function fetchData() {
        const data = await fetchInternData(params.slug) as InternshipApplication;
        setInternData(data);
   


    }

    useEffect(() => {
        fetchData();
    }, []);
   

    
    var communication: number = parseInt(internData?.communication ?? '0')
    var analyticalSkills: number = parseInt(internData?.analyticalSkills ?? '0')
    var ethicalProblemSolver: number = parseInt(internData?.ethicalProblemSolver ?? '0')
    var synergy: number = parseInt(internData?.synergy ?? '0')
    var totalworkingdays: number = 52;
    var present: number = parseInt(internData?.attendance ?? '0');
    var totalpresent: number = Math.floor((present/ totalworkingdays) * 100);
    var svg1stroke = 753 - (totalpresent * 5.75)
    var absent = 100 - totalpresent
    var svg2stroke = 630 + (absent * 5.75)

  
   


    return (
        <>

            

                <div id={nstyle.wpage} >
                    <div id={nstyle.logo}>

                        <img alt="" src='logo.png'></img>
                    </div>
                    <div id={nstyle.comname}>
                        <h3>Quantum <span>Wave</span></h3>
                        <div></div>
                        <h5>Wave of opportunity</h5>
                    </div>
                    <div id={nstyle.highlights}>
                        <h1>Highlights</h1>
                        <div id={nstyle.skills}>
                            <div id={nstyle.dot}></div>
                            <div id={nstyle.skill}>
                                <h4>Problem-Solving Skills:</h4>
                                <p>Proactively researched and implemented new solutions to improve CRM efficiency.</p>
                            </div>
                        </div>
                        <div id={nstyle.skills}>
                            <div id={nstyle.dot}></div>
                            <div id={nstyle.skill}>
                                <h4>Feature Development:</h4>
                                <p>Implemented a customer feedback module that resulted in a 15% increase in positive reviews.</p>
                            </div>
                        </div>
                        <div id={nstyle.skills}>
                            <div id={nstyle.dot}></div>
                            <div id={nstyle.skill}>
                                <h4>Technical Expertise:</h4>
                                <p>Utilized ReactJS and Angularjs to create a dynamic and user-friendly interface.</p>
                            </div>
                        </div>
                        <div id={nstyle.skills}>
                            <div id={nstyle.dot}></div>
                            <div id={nstyle.skill}>
                                <h4>Team Contribution:</h4>
                                <p>Provided clear and concise documentation, facilitating knowledge sharing within the team.</p>
                            </div>
                        </div>

                    </div>
                    <div id={nstyle.interndetails}>
                        <div id={nstyle.name} className={nstyle.commondet}>
                            <h3>Name</h3>
                            <h4 >{internData?.fullName}</h4>
                        </div>
                        <div id={nstyle.college} className={nstyle.commondet}>
                            <h3>College</h3>
                            <h4>{internData?.universityCollegeName}</h4>
                        </div>
                        <div id={nstyle.erp} className={nstyle.commondet}>
                            <h3>Enrollment No</h3>
                            <h4>{internData?.enrollmentNumber}</h4>
                        </div>
                        <div id={nstyle.internrole} className={nstyle.commondet}>
                            <h3>Intern Role</h3>
                            <h4>{internData?.desiredInternshipPosition}</h4>
                        </div>
                        <div id={nstyle.email} className={nstyle.commondet}>
                            <h3>Email</h3>
                            <h4>{internData?.emailAddress}</h4>
                        </div>
                        <div id={nstyle.varified} className={nstyle.commondet}>
                            <h3>Verified By</h3>
                            <div id={nstyle.sign}>
                                <div id={nstyle.signimg}>


                                </div>
                                <div id={nstyle.signimage}>

                                    <div></div>
                                    <h6>G.Akila ,HR</h6>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div id={nstyle.analysisrectangle}>
                        <div id={nstyle.analysis}>
                            <div id={nstyle.formheading}>
                                <h2>INTERNSHIP- EVALUATION REPORT</h2>
                                <div id={nstyle.ellipse}></div>

                            </div>
                         
                            <div id={nstyle.performance}>
                                <h3 className={nstyle.perhead}>Performance</h3>
                                <h2 className={nstyle.perhead1}>Personal Qualities</h2>

                                <div id={nstyle.separate}>
                                </div>
                                <div id={nstyle.graph}>
                                    <div id={nstyle.graphanalysis}>

                                        <h1 style={{ height: `${parseInt(internData?.adaptability ?? '0') || 0}%` }}></h1>
                                        <h1 className={nstyle.scope}></h1>
                                        <h2 style={{ height: `${parseInt(internData?.persistence ?? '0') || 0}%` }}></h2>
                                        <h2 className={nstyle.scope}></h2>
                                        <h3 style={{ height: `${parseInt(internData?.reliability ?? '0') || 0}%` }}></h3>
                                        <h3 className={nstyle.scope}></h3>
                                        <h4 style={{ height: `${parseInt(internData?.accuracy ?? '0') || 0}%` }}></h4>
                                        <h4 className={nstyle.scope}></h4>
                                        <h5 style={{ height: `${parseInt(internData?.resilience ?? '0') || 0}%` }}></h5>
                                        <h5 className={nstyle.scope}></h5>


                                    </div>
                                    <div id={nstyle.yaxis}>
                                        <h6>5</h6>
                                        <h6>4</h6>
                                        <h6>3</h6>
                                        <h6>2</h6>
                                        <h6 >1</h6>
                                        <h6 id={nstyle.ylower}>0</h6>
                                    </div>
                                    <div id={nstyle.xaxis}>
                                        <h5>Ad</h5>
                                        <h5>Pe</h5>
                                        <h5>Re</h5>
                                        <h5>Ac</h5>
                                        <h5>Ri</h5>
                                    </div>
                                    <div id={nstyle.parameters}>
                                        <h4>&#40;Ad&#41; Adaptability</h4>
                                        <h4>&#40;Pe&#41; Persistance</h4>
                                        <h4>&#40;Re&#41; Reliability</h4>
                                        <h4>&#40;Ac&#41; Accuracy</h4>
                                        <h4>&#40;Ri&#41; Resilience</h4>

                                    </div>

                                </div>
                            </div>



                            <div id={nstyle.softskill}>
                                <div id={nstyle.softheading}>
                                    <h3>Statistics</h3>
                                    <h2>Soft-Skills</h2>
                                </div>
                                <div id={nstyle.softline}></div>
                                <div id={nstyle.softanalysis}>
                                    <div id={nstyle.communication} className={nstyle.skills}>
                                        <h3>Communication Skills</h3>
                                        <div id={nstyle.combar} style={{ width: `${communication}%` }}></div>
                                        <div className={nstyle.softscope} ></div>

                                    </div>
                                    <div id={nstyle.analytic} className={nstyle.skills}>
                                        <h3>Analytical skills</h3>
                                        <div id={nstyle.anabar} style={{ width: `${analyticalSkills}%` }}></div>
                                        <div className={nstyle.softscope}></div>

                                    </div>
                                    <div id={nstyle.synergy} className={nstyle.skills}>
                                        <h3>Synergy</h3>
                                        <div id={nstyle.synbar} style={{ width: `${synergy}%` }}></div>
                                        <div className={nstyle.softscope}></div>

                                    </div>
                                    <div id={nstyle.problemsolver} className={nstyle.skills}>
                                        <h3>Ethical problem-solver</h3>
                                        <div id={nstyle.probar} style={{ width: `${ethicalProblemSolver}%` }}></div>
                                        <div className={nstyle.softscope} ></div>

                                    </div>
                                </div>
                                <div id={nstyle.softxaxis}>
                                    <h4>0</h4>
                                    <h4>1</h4>
                                    <h4>2</h4>
                                    <h4>3</h4>
                                    <h4>4</h4>
                                    <h4>5</h4>


                                </div>



                            </div>
                            <div id={nstyle.rectanglebox}></div>
                            <div id={nstyle.bluebox}></div>
                            <div id={nstyle.duration}>
                
                                <div id={nstyle.time}>
                                    <h1>Duration :&nbsp; </h1>
                                    <h2> 3 Months</h2>
                                </div>
                            </div>
                            <div id={nstyle.statistics}>
                                <h3>Statistics</h3>
                                <h2>Productivity</h2>
                                <div id={nstyle.statisticsline}></div>
                                <div id={nstyle.skilled}>
                                    <div id={nstyle.outer}>
                                        <div id={nstyle.inner}>

                                        </div>

                                    </div>
                                    <div>
                                    <svg id={nstyle.svg1} xmlns="http://www.w3.org/2000/svg" version="1.1" width="400px" height="300px" >
                                        <circle cx="200" cy="150" r="100" strokeLinecap="round" strokeDashoffset={svg1stroke} />
                                    </svg>
                                    <svg id={nstyle.svg2} xmlns="http://www.w3.org/2000/svg" version="1.1" width="400px" height="300px">
                                        <circle cx="200" cy="150" r="100" strokeLinecap="round" strokeDashoffset={svg2stroke} />
                                    </svg>
                                    </div>



                                    <div id={nstyle.remark}>
                                        <h3>Remark</h3>
                                        <div id={nstyle.remarkdata}>

                                        <h1>{internData?.attendanceReview}</h1>
                                        </div>
                                    </div>
                                    <div id={nstyle.present}>
                                        <div></div>
                                        <h6>Present</h6>
                                        <h5>{totalpresent}%</h5>
                                    </div>
                                    <div id={nstyle.absent}>
                                        <div></div>
                                        <h6>Absent</h6>
                                        <h5>{absent}%</h5>
                                    </div>
                                    <div id={nstyle.days}>
                                        <h1 id={nstyle.present}>{present}</h1>

                                        <h1>/</h1>

                                        <h1 id={nstyle.total}>{totalworkingdays}</h1>
                                        <h1>days</h1>
                                    </div>
                                </div>

                            </div>






                        </div>
                    </div>
                </div>

          
        </>
    )
}
