import React from "react";
import "./Homepage.css";
import facialtech from "../assets/facialtech.png";
import { useNavigate } from "react-router-dom";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import imgcap from "../assets/imgcap.jpg";
import feature from "../assets/feature.jpg";
import unbiastest from "../assets/unbiastest.jpg";


export default function Home () {
    const navigate = useNavigate();
    const nextPage = () => {
        navigate("/ethics")
    }
    return (
        <div className="home">
            
         <div className="homepage">
            <h1>THE ETHICAL DILEMMA OF <br />FACIAL RECOGNITION TECHNOLOGY</h1>
            <p>SENG 601 - Fall 2025</p>
            <p id='authors'>By: Chelsea Okoroji, Garrett Mizell, Rediat Mulualem, Ameena Niamathullah</p>
            
            
            <br></br>

            <section id="introduction">
                <h2>Introduction</h2>
                <div id="home-header">
                    <div id="header-text">
                        <p>Movies such as Monsters Vs Aliens, Mission: Impossible, or For Your Eyes Only 
                            (James Bond franchise) have employed some type of facial recognition scene. 
                            For a long time this was considered sci-fi fantasy, however, facial recognition
                            software is being implemented increasingly more in today’s world.  
                        </p>
                        <p>From logging 
                            into your smart phone, to using funny camera filters, to police using CCTV cameras
                            to link individuals to crimes. Many cases with facial recognition software are 
                            harmless, or minimal in damage but there are many cases where it drastically fails.
                        </p>
                        <p>So, how exactly does it work?</p>
                    </div>
                    <img src={facialtech} alt="Facial Recognition Technology" />                    
                </div> 
                <FaArrowRightFromBracket className="arrow-icon" onClick={nextPage}/>
            </section>

            <section id="how-it-works">
                <h2>How Facial Recognition Technology Works</h2>
                <p>There are many different facial recognition softwares, some better than others. 
                    However, majority of these algorithms follow the same general structure: 
                </p>
                <div id="frt-steps">
                    <div id="step1">
                        <h3>Step 1: Image Capture</h3>
                        <p>A photo of the individual's face is taken. This can happen in any device such as phones, tablets, computers, etc.</p>
                        <img src={imgcap} alt="Image Capture" />
                    </div>

                    <div id="step2">
                        <h3>Step 2: Feature Extraction</h3>
                        <p>Characterize key features on the face. These may include distance between eyes, eye height, jaw contour, lip size, etc.</p>
                        <img src={feature} alt="Feature Extraction" />
                    </div>

                    <div id="step3">
                        <h3>Step 3: Database Comparison</h3>
                        <p>Convert features into numerical values to compare to database. A valid comparison means we found a successful match!</p>
                        <img src={unbiastest} alt="Unbias Test" />
                    </div>
                </div>
                <p>If an exact match is not found, which can happen often, the algorithm will output of series of ‘likely matches’ which are close to the numerical value,
                     but could differ by any preset amount. Although, for FRT implementations on devices like phones, it’s very unlikely another individual with a similar facial
                     features to the phone owner will be able to find and open the phone, so it goes almost noticed. However, for larger cases, it can have drastic consequences in
                     areas such as security and privacy. 
                </p>
                
            </section>

            <section id="applications">
                <h2>Real-World Applications</h2>
                <p>Facial recognition technology is being used in a variety of ways in today’s world. Some of the most common applications include:</p>
                <ul>
                    <li>Law Enforcement - U.S. Police Departments rely on these services for criminal investigations.</li>
                    <li>Healthcare - Facial Recognition used to analyze emotions, track health risks, determine medical diagnoses, etc.</li>
                    <li>Private Sector - Many employers track work attendance of their exployees using facial scans.</li>
                    <li>Recreation Industries - In Shanghai, Disneyland allows ease of access for their seasonal pass holders using facial scans.</li>
                </ul>
                <p>Despite the advancements facial recognition algorithms have made in our daily lives, this technology still poses an ethical threat to individual users, 
                    broader society, and global users.</p>
            </section>
        </div>
        </div>
    );
}