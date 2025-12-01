import React from "react";
import "./ToDo.css"
import racialbias from "../assets/racialbias.jpg"
import diversity from "../assets/diversity.png"
import ccpalogo from "../assets/ccpalogo.png"
import aclu from "../assets/aclu.jpg"
import efflogo from "../assets/efflogo.png"
import naacp from "../assets/naacp.png"

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
                            <h4>Microsoft FaceDetect Model</h4>
                            <img src={racialbias} alt="Racial Bias" width="400" height="240"/>
                            <h6>In 2018, researchers Joy Buolamwini and Timnit Gebru wrote a paper about intersectional discrimination
                                within big facial analysis technologies and software trained on large datasets. Microsoft FaceDetect
                                model was among the many technologies the two authors tested. 
                            </h6> 
                            <h6>To analyze the performance of the software, both researchers created a 
                                balanced dataset containing a diverse set of skin types and gender groups. 
                            </h6>

                            <ol id="classify-results">
                                <li>For gender classification tasks, the model displayed a low error in prediction, with a rate of 6.3%.</li>
                                <br></br>
                                <li>However, greater disparities were shown for both gender and race classification tasks. The model 
                                produced a 0% error rate for light-skinned, male predictions, but a 20.8% error rate for dark skinned female predictions.
                                </li>
                            </ol>
                        </div>


                    </div>

                    <div id="bias-conclusion">
                        <div id="temp">
                            <img src={diversity} alt="Diversity" width="400" height="240"/>
                            <div id="text">
                                <p>Both cases highlight the importance of diverse datasets in training 
                                    facial recognition models. Many people do not realize that the reason
                                    behind improperly trained FRT models are both the implicit and explicit
                                    biases the programmers carry over during development (Quinonez 2024).
                                </p>

                                <p>The team of developers are usually not minorities themselves, 
                                    which results in the exclusion of racial groups during training.
                                    The primary racial makeup of the development team is usually white
                                    males. To combat this issue, companies should strive to hire a more
                                    diverse team of developers
                                </p>                            
                            </div>
                        </div>
                        <p>that can bring in different perspectives. Doing so will allow developers to 
                            identify potential biases in the datasets and algorithms that they may have overlooked
                            (Quinonez 2024). Having a diverse team can also help with creating more inclusive datasets 
                            that better represent various demographics. This will ultimately lead to facial recognition
                            models will greater prediction accuracy and precise performance.
                        </p>
                    </div>
                </section>
                
                <section id="policy">
                    <h3>Legal Intervention</h3>
                    <p>To ensure fairness and accountability, federal and state governments should establish
                        uniform rules and regulations for FRT use in criminal investigations such as:
                    </p>
                    <ul id="legal-list">
                        <li>1. Requiring judicial warrants or probable cause before deploying FRT for identification or arrests.</li>
                        <li>2. Requiring independent audits and bias testing of facial recognition systems, with public
                        reporting of error rates. </li> 
                        <li>3. Prohibiting use of privately scraped databases that violate privacy rights.</li> 
                        <li>4. Requiring human verification before any arrest based on an algorithmic match. </li>
                        <li>5. Guaranteeing a right to notification and appeal for individuals wrongly identified.</li>
                    </ul>
                
                    <div id="state-policy">
                        <div id="temp-2">
                            <div id="text-2">
                                <p>These changes to FRT can be implemented both at the federal and state level with the help of congress,
                                    state legislators and local oversight boards. The California Consumer Privacy Act (CCPA) is an example
                                    of state level change that prohibits the use of FRT for criminal investigation without the knowledge of consumers. 
                                </p>
                                <p>
                                    In California, businesses are required to provide notice before collecting facial data, 
                                    protect it with reasonable security, and allow consumers to exercise rights such as accessing,
                                    deleting and opting out of the sale or sharing of their FRT data.                             
                                </p>
                            </div>
                            <img src={ccpalogo} alt="CCPA" width="485" height="380"/>
                        </div>
                        <p>Civil society organizations such as the American Civil Liberties Union (ACLU), Electronic Frontier Foundation (EFF),
                            and the National Association for the Advancement of Colored People (NAACP) play an essential role in encouraging 
                            reform through public education and advocacy.
                        </p>

                        <div id="org-logos">
                            <img src={aclu} alt="ACLU"/>
                            <img src={efflogo} alt="EFF"/>
                            <img src={naacp} alt="NAACP"/>
                        </div>
                    </div>
                    <h4><em>Impact on Stakeholders</em></h4>
                    <p>Stakeholders that are involved in FRT use for criminal arrest are law enforcement, the general public, minorities who 
                        are disproportionately affected by FRT and tech companies.
                    </p>
                    <div id="stakeholders">
                        <div id="law">
                            <h5>Law Enforcement</h5>
                            <p>New regulations will increase public trust and transparency
                            but may initially affect the speed of investigations negatively for law enforcement.</p>
                        </div>

                        <div id="public">
                            <h5>General Public</h5>
                            <p>The general public would gain greater privacy and protection from wrongful arrests,
                            though some citizens may feel less secure due to the new changes.</p>
                        </div>

                        <div id="minorities">
                            <h5>Minority Communities</h5>
                            <p>
                                Minorities would benefit from decreased racial bias and discrimination in FRT use,
                                leading to fairer treatment and increased representation.
                            </p>
                        </div>  

                        <div id="tech">
                            <h5>Tech Companies</h5>
                            <p>Technology companies could face higher compliance 
                                costs but gain credibility and innovation incentives. </p>
                        </div>
                    </div>
                </section>

            </section>
        </div>

    );
}