import React from "react";
import "./Homepage.css";
import facialtech from "../assets/facialtech.png";
import { useNavigate } from "react-router-dom";
import { FaArrowRightFromBracket } from "react-icons/fa6";


export default function Home () {
    const navigate = useNavigate();
    const nextPage = () => {
        navigate("/ethics")
    }
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
                to identify and secure. However, there are some dileemas raised from combining humans features and technology!</p>
                <FaArrowRightFromBracket className="arrow-icon" onClick={nextPage}/>
            </section>
        </div>
        </div>
    );
}