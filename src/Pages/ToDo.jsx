import React from "react";
import "./ToDo.css"

export default function ToDo (){
    return (
        <div className="todo-page">
            <h1>POTENTIAL SOLUTIONS</h1>
            <div className="todo-header">    
                <p>We stated previously that the main ethical concerns with facial recognition algorithms are:</p>
                <ul>
                    <li><a href="#privacy">Privacy Violations</a></li>
                    <li><a href="#bias">Bias and Discrimination</a></li>
                    <li><a href="#transparency">Lack of Transparency</a></li>
                    <li><a href="#autonomy">User Autonomy and Consent</a></li>
                    <li><a href="#risk">Security Risk</a></li>
                </ul>
                <p>To address these issues, we have compiled a list of solutions and legal and policy changes that
                     stakeholders can take to make facial recognition technology (FRT) more safe for everybody to use.</p>  
            </div>

            <section id="solutions">
                <section id="bias">
                    <h3>Bias Mitigation</h3>
                    <p>To begin finding solutions for a more ethical FRT, 
                        we must start at a technical level. Training is a very crucial step 
                        in creating facial recognition models because this is stage that determines 
                        how accurately the algorithm will produce its predictions. 
                    </p>    

                    <p>Models are tested on many facial datasets in order to identify key features that will match
                        a certain classification. However, datasets that are lacking in diverse skin
                        colors, various facial expressions, and unique facial features and textures, 
                        are more prone to showing preference towards a singular demographic and 
                        set of features over others, which are reflected in the model’s predictions.
                    </p> 

                    <div className="bias-cases">
                        <div id="case-1">
                            <h4>HP MediaSmart WebCam</h4>
                            <iframe
                            width="400"
                            height="240"
                            src="https://www.youtube.com/embed/t4DT3tQqgRM" 
                            title="HP Computers are Racist."
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            ></iframe>

                            <h6>In 2009, Hewlett-Packard (HP) released its new Mediasmart webcam. 
                                Upon its arrival, the device sparked controversy when a YouTube 
                                video showcasing racial bias with the web-tracking feature 
                                applied to a white individual versus a black individual.
                            </h6>
                            <h6>Two forms of algorithmic bias were found in the webcam:</h6>
                            <ol id="bias-types">
                                <li>HP chose specific lighting conditions that were most favorable to lighter-skinned individuals.</li>
                                <br></br>
                                <li>HP failed to run thorough tests of their facial recognition technology on non-white groups in 
                                    order to prevent discriminatory outcomes</li>
                            </ol>
                        </div>

                        <div id="case-2">
                            <h4>Microsoft</h4>
                        </div>

                    </div>


                </section>
                
                <section id="privacy">
                    <h3>Privacy Violation</h3>
                </section>

                <section id="transparency">
                    <h3>Lack of Transparency</h3>
                    <p>blah blah blah</p>
                </section>

                <section id="autonomy">
                    <h3>User Autonomy and Consent</h3>
                    <p>blah blah blah</p>
                </section>

                <section id="risk">
                    <h3>Security Risk</h3>
                    <p>blah blah blah</p>
                </section>
            </section>
        </div>

    );
}