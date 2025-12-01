import React from "react";
import Chart from "../Components/Chart";
import "./Ethics.css";
import { useNavigate } from "react-router-dom";
import { FaArrowRightFromBracket } from "react-icons/fa6";
export default function Ethics (){
        const navigate = useNavigate();
        const nextPage = () => {
            navigate("/events")
        }
    return (
        <div className="ethics">
            <h1>WHY SHOULD WE BE CONCERNED</h1>
            <h2>Discrimination in Technology</h2>
            <p>One of the few ethical concerns regarding facial recognition technology is<br />that there is a bias that performs different based on factors such as race, gender, and etc</p>
            <div style={{ width: "500px", height: "300px", margin: "0 auto" }}>
                <Chart />
                <p style={{ marginTop: "10px", fontSize: "10px", color: "#555" }}>
                    LuxAndCloud (2024) Police Facial Recognition: Safe or Scary? What You Need to Know. https://luxand.cloud/face-recognition-blog/police-facial-recognition-safe-or-scary-what-you-need-to-know-2024
                </p>
            </div> 
            <section id="surveliience">
                <h3>Privacy Concerns</h3>
                <p>Privacy concerns have also derived from the surgence of facial recognition technology. Facial recognition software can be used in survellience technology, personal phones and tablets,
                 law enforncement are more. This raises concerns of how data from this technology is being stored and used. </p>
                <p> Cities in China have implemented a social score which is determined by how you act in public. Good deeds gain points and bad ones lose points. They use street cameras and facial recognition to accomplish this. For example, if a camera sees you jaywalking, it will automatically decrease your score and there is nothing you can do about it, these scores are not reviewed. This causes great social stress for individuals and restricts their freedoms</p>
            </section>
            <section id="reliability">
                <h4>Law Enforcement</h4>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/sa1Ur4-x3jc" 
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    ></iframe>
                <p>There have also been cases of wrongful arrest due to facial recognition technology.</p>
                <p>A man named Travis Williams was arrested by the NYPD for a sex related crime. Williams ended up being falsely arrested and jailed for two even though he did not match the description of the perpetrator. The only two distinct similarities between the two were that they were both black and locs. Williams was falsely arrested due to the NYPD's facial recognition technology, causing Civil Rights and privacy activist groups speak out against this and demand a proper investigation</p>
            </section>
            <FaArrowRightFromBracket className="arrow-icon" onClick={nextPage}/>
        </div>

    );
}