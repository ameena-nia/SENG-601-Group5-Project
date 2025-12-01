import React from "react";
import "./CurrentEvents.css";

const CurrentEvents = () => {
  return (
    <main className="ce-page">
      <header className="ce-header">
        <p className="ce-tag">Technology & Society</p>
        <h1 className="ce-title">Current Events / News on Facial Recognition</h1>
        <p className="ce-subtitle">
          How facial recognition technology is reshaping borders, policing, and civil rights in the United States.
        </p>
        <div className="ce-meta">
          <span>Last updated: November 2025</span>
          <span>Topic: Facial Recognition Technology (FRT)</span>
        </div>
      </header>

      <section className="ce-layout">
        {/* Left column – main story */}
        <article className="ce-card ce-main-article">
          <h2 className="ce-section-title">Overview</h2>
          <p>
            Facial recognition technology (FRT) has been expanding rapidly across the United States, raising
            significant ethical and civil rights concerns. Recently, the Department of Homeland Security broadened
            its use of facial recognition to all U.S. borders—including air, sea, and land ports. Previously limited
            to air travel, the system is now mandatory for non-U.S. citizens, whose images may be stored for up to
            75 years. U.S. citizens are allowed to opt out, but doing so may result in delays or additional screening.
          </p>
          <p>
            A 2024 report from the U.S. Commission on Civil Rights highlighted that FRT continues to misidentify Black
            people and other minority groups at disproportionately high rates. Misuse in the private sector has also
            surfaced: the Federal Trade Commission banned Rite Aid from using facial recognition for five years after
            the system falsely flagged women and people of color as shoplifters.
          </p>
          <p>
            More cases continue to emerge in law enforcement. In 2025, Trevis Williams was wrongfully arrested in
            Brooklyn after facial recognition incorrectly matched him to a suspect—despite significant height and
            weight differences. Similarly, the 2025 settlement of Robert Williams’ lawsuit in Detroit led the Detroit
            Police Department to adopt stricter policies to prevent wrongful arrests based on FRT.
          </p>
        </article>

        {/* Right column – highlight box */}
        <aside className="ce-card ce-highlight">
          <h3 className="ce-highlight-title">Key Takeaways</h3>
          <ul className="ce-highlight-list">
            <li>FRT is now used at all U.S. borders for non-citizens.</li>
            <li>U.S. citizens can opt out, but may face extra delays.</li>
            <li>Higher misidentification rates for women and people of color.</li>
            <li>Real-world wrongful arrest cases are shaping new policies.</li>
          </ul>
        </aside>
      </section>

      <section className="ce-grid">
        <article className="ce-card">
          <h2 className="ce-section-title">Ethical Concerns</h2>
          <ul className="ce-bullet-list">
            <li>
              FRT shows higher false-positive rates for women and people of color due to imbalanced or low-quality
              training data.
            </li>
            <li>
              Many systems collect and analyze biometric data without clear consent, raising transparency and autonomy
              issues.
            </li>
            <li>
              Use of facial recognition by law enforcement and in public spaces can increase surveillance, potentially
              chilling free speech, freedom of movement, and privacy.
            </li>
            <li>
              There is limited federal oversight, and the U.S. Commission on Civil Rights notes that no specific
              federal law regulates government use of FRT.
            </li>
          </ul>
        </article>

        <article className="ce-card">
          <h2 className="ce-section-title">Addressing the Challenges</h2>
          <ul className="ce-bullet-list">
            <li>Improved testing and unbiased datasets to reduce misidentification.</li>
            <li>Greater transparency about when, where, and how facial recognition is used.</li>
            <li>Clearer legal and regulatory frameworks at the federal and state levels.</li>
            <li>
              Ethics-focused education for developers, law enforcement, and policymakers to support responsible use.
            </li>
          </ul>
        </article>
      </section>

      <section className="ce-card ce-references">
        <h2 className="ce-section-title">References & Further Reading</h2>
        <ol className="ce-ref-list">
          <li>
            Hesson, T. (2025, October 24). <em>U.S. expands facial recognition at borders to track non-citizens.</em>{" "}
            Reuters.{" "}
            <a
              href="https://www.reuters.com/world/us/us-expands-facial-recognition-borders-track-non-citizens-2025-10-24/"
              target="_blank"
              rel="noreferrer"
            >
               https://www.reuters.com/world/us/us-expands-facial-recognition-borders-track-non-citizens-2025-10-24/
            </a>
          </li>
          <li>
            New York State Bar Association. (2023).{" "}
            <em>Privacy vs. security: The legal implications of using facial recognition technology at entertainment venues.</em>{" "}
            <a
              href="https://nysba.org/privacy-vs-security-the-legal-implications-of-using-facial-recognition-technology-at-entertainment-venues/?srsltid=AfmBOoo6UNjYEUw9YIIu14NWeMRrYZ78QoKiEaArh0-RBaCn8xOtjaGf"
              target="_blank"
              rel="noreferrer"
            >
              Read article
            </a>
          </li>
          <li>
            U.S. Commission on Civil Rights. (2024).{" "}
            <em>
              U.S. Commission on Civil Rights releases report on civil rights implications of federal use of facial
              recognition technology.
            </em>{" "}
            <a
              href="https://www.usccr.gov/news/2024/us-commission-civil-rights-releases-report-civil-rights-implications-federal-use-facial"
              target="_blank"
              rel="noreferrer"
            >
              Read report
            </a>
          </li>
          <li>
            National Academies of Sciences, Engineering, and Medicine. (n.d.).{" "}
            <em>Facial recognition technology: Project overview.</em>{" "}
            <a
              href="https://www.nationalacademies.org/projects/DEPS-CSTB-21-04"
              target="_blank"
              rel="noreferrer"
            >
              Project page
            </a>
          </li>
        </ol>
      </section>
    </main>
  );
};

export default CurrentEvents;
