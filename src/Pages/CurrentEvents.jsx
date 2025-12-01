import React from "react";
import "./CurrentEvents.css";
import unbiastest from "../assets/unbiastest.jpg"
import transparency from "../assets/transparency.png"
import legal from "../assets/legal.png"
import ethics from "../assets/ethics.jpg"
import uscomiss from "../assets/uscomiss.jpg"
import ftclogo from "../assets/ftclogo.jpg"

export default function CurrentEvents (){
    return (
        <div className="events-page">
            <h1>CURRENT EVENTS</h1>
            <p>Facial recognition technology (FRT) has been expanding rapidly
            across the United States, raising significant ethical and civil rights
            concerns. Recently, the Department of Homeland Security broadened its
            use of facial recognition to all U.S. borders—including air, sea, and 
            land ports. Previously limited to air travel, the system is now mandatory 
            for non-U.S. citizens, whose images may be stored for up to 75 years. U.S.
            citizens are allowed to opt out, but doing so may result in delays or 
            additional screening.</p>

            <section id="news-articles">
                <div id="events">
                    <div id="case-1">
                        <p>A 2024 report from the U.S. Commission on Civil Rights 
                        highlighted that FRT continues to misidentify Black people
                        and other minority groups at disproportionately high rates.
                        </p>
                        <img src={uscomiss} alt="US Commission on Civil Rights"/>
                    </div>

                    <div id="case-2">
                        <p>The Federal Trade Commission banned Rite Aid from using 
                        facial recognition for five years after the system falsely 
                        flagged women and people of color as shoplifters.</p>
                        <img src={ftclogo} alt="Federal Trade Commission"/>
                    </div>

                    <div id="case-3">
                        <p>In 2025, Trevis Williams was wrongfully arrested in Brooklyn after
                        facial recognition incorrectly matched him to a suspect—despite 
                        significant height and weight differences.
                        </p>
                        <iframe
                        width="400"
                        height="240"
                        src="https://www.youtube.com/embed/7s93WHlL2Gc" 
                        title="HP Computers are Racist."
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        ></iframe>
                    </div>

                    <div id="case-4">
                        <p>Similarly, the 2025 settlement of Robert Williams’ lawsuit in Detroit 
                            led the Detroit Police Department to adopt stricter policies to prevent
                            wrongful arrests based on FRT.
                        </p>
                        <iframe
                        width="400"
                        height="240"
                        src="https://www.youtube.com/embed/Tfgi9A9PfLU" 
                        title="HP Computers are Racist."
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            <section id="ethical-concerns">
                <h2>Ethical Concerns</h2>
                <ul id="concerns-list">
                    <li>FRT shows higher false-positive rates for women and people of color due to
                         imbalanced or low-quality training data.</li>
                    <li>Many systems collect and analyze biometric data without clear consent, 
                        raising transparency and autonomy issues.</li>
                    <li>Use of facial recognition by law enforcement and in public spaces can increase
                         surveillance, potentially chilling free speech, freedom of movement, and privacy.</li>
                    <li>There is limited federal oversight, and the U.S. Commission on Civil Rights notes that no
                         specific federal law regulates government use of FRT.</li>
                </ul>
            </section>

            <section id="addressing-concerns">
                <h2>Addressing the Concerns</h2>
                <div id="steps">
                    <div id="step-1">
                        <img src={unbiastest} alt="Unbiased Testing"/>
                        <p>Improve testing and utilize variety of unbiased datasets to reduce misidentification.</p>
                    </div>

                    <div id="step-2">
                        <img src={transparency} alt="Transparency"/>
                        <p>Greater transparency about when, where, and how facial recognition is used.</p>
                    </div>

                    <div id="step-3">
                        <img src={legal} alt="Legal Frameworks"/>
                        <p>Clearer legal and regulatory frameworks at the federal and state levels.</p>
                    </div>

                    <div id="step-4">
                        <img src={ethics} alt="Ethics Education"/>
                        <p>Ethics-focused education for developers, law enforcement, and 
                        policymakers to support responsible use.</p>
                    </div>
                </div>
            </section>
        </div>

    );
}