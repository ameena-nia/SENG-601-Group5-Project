import React from "react";
import "./Homepage.css"
import facialtech from "../assets/facialtech.png"

export default function Home () {
    return (
        <div className="home">
            
         <div className="homepage">
            <h1>THE ETHICAL DILEMMA OF <br />FACIAL RECOGNITION TECHNOLOGY</h1>
            <p id='authors'>By: Chelsea Okoroji, Garrett Mizell, Rediat Mulualem, Ameena Niamathullah</p>
            <img src={facialtech} alt="Facial Recognition Technology" />

            <section id="what-is-facial-recognition-technology">    
                <h2>What is Facial Recognition?</h2>
                <p>Facial Recognition Technology is an innovative means <br />
                of easily recognizing people via software <br />
                to identify and secure. Sum sum sum sum sum sum </p>
            </section>

            <section id="ethical-concerns">
                <h2>Key Ethical Concerns</h2>
            </section>

            <section id="real-world-applications">
                <h2>Real World Applications</h2>
            </section>

        </div>
        </div>
    );
}