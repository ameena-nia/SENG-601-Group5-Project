import React, { useState, useRef, useEffect } from "react";
import { IoIosPeople } from "react-icons/io";
import { MdSecurity } from "react-icons/md";
import { GiTalk } from "react-icons/gi";
import "./Views.css";
import acm from "../assets/acm.jpeg";
import { useNavigate } from "react-router-dom";
import { FaArrowRightFromBracket } from "react-icons/fa6";


export default function Views() {
  const [openPeople, setOpenPeople] = useState(false);
  const [openSecurity, setOpenSecurity] = useState(false);
  const [openSpeech, setOpenSpeech] = useState(false);

  const acmsec = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
      const nextPage = () => {
          navigate("/sources")
      }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (acmsec.current) {
      observer.observe(acmsec.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div className="views">
      <h1>WHAT IS OUR OPINION?</h1>
      <h2>Do we agree?</h2>
        <p>Yes we agree! Focusing on diverse datasets allows the system to improve on its bias towards different minority groups. </p>
        <p>We believe that advocating for privacy acts and other laws regarding the protection of individual identity and data is essential in government and law enforcement. Our teams has discussed a desire of more governemnt intervention in FRT. We'd like to avoid technology being adopted in certain places before the risk are understood, to prevent cases such as Travis Williams wrongful arrest. </p>
      <div
        style={{
          display: "flex",
          gap: "40px",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <div style={{ width: "200px", cursor: "pointer", textAlign: "center" }}>
          <IoIosPeople
            onClick={() => setOpenPeople(!openPeople)}
            size={200}
            color="#4f3d64"
            className="icon-shake"
          />

          <div
            style={{
              maxHeight: openPeople ? "200px" : "0",
              overflow: "hidden",
              transition: "max-height 0.4s ease",
              backgroundColor: "#f7f2fc",
              padding: openPeople ? "10px" : "0",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          >
            <p style={{ margin: 0 }}>Promoting a the use of diverse features on FRT advocates against racial discrimination and creates a safer circumstance for those groups as well</p>
          </div>
        </div>

        <div style={{ width: "200px", cursor: "pointer", textAlign: "center" }}>
          <MdSecurity
            onClick={() => setOpenSecurity(!openSecurity)}
            size={200}
            color="#4f3d64"
            className="icon-shake"
          />

          <div
            style={{
              maxHeight: openSecurity ? "200px" : "0",
              overflow: "hidden",
              transition: "max-height 0.4s ease",
              backgroundColor: "#f7f2fc",
              padding: openSecurity ? "10px" : "0",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          >
            <p style={{ margin: 0 }}>Legal intervention through policies and acts such as the California Consumer Privacy Act protect individual information. Many civil unions advocate for more policies regarding FRT</p>
          </div>
        </div>
         <div style={{ width: "200px", cursor: "pointer", textAlign: "center" }}>
          <GiTalk
            onClick={() => setOpenSpeech(!openSpeech)}
            size={200}
            color="#4f3d64"
            className="icon-shake"
          />

          <div
            style={{
              maxHeight: openSpeech? "200px" : "0",
              overflow: "hidden",
              transition: "max-height 0.4s ease",
              backgroundColor: "#f7f2fc",
              padding: openSpeech ? "10px" : "0",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          >
            <p style={{ margin: 0 }}>Spreading awareness through media is also essential. Use hashtags and post </p>
          </div>
        </div>
      </div>
      <h3 style={{fontSize: "30px"}}>Our Moral Compass</h3>
      <div ref={acmsec}
        className={`acm-section ${isVisible ? "visible" : ""}`}>
        <img src={acm} alt="ACM" className="acm-img" />

        <p className="acm-text">
            We used ethical principiles from the ACM to motivate our opinions on the ethics of FRT. Technology should be constructed with the mindset it is contributing to society and human well being - ACM 1.1. Avoid Harm - ACM 1.2. Be fair and take action not to discriminate - ACM 1.4. Respect privacy and honor confidentiality - ACM 1.6 and 1.7. <br />We also used our own personal beliefs concerning bias and privacy. We all came to a general consensus that fairness and equity should be implemented in all factors of FRT.
        </p>
        </div>
        <FaArrowRightFromBracket className="arrow-icon" onClick={nextPage}/>
    </div>
  );
}