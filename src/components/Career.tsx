import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span>Experience</span>
        </h2>
        <div className="career-info" style={{ marginBottom: "100px" }}>
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT Support / Student Worker</h4>
                <h5>University of Hartford</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Troubleshoot hardware/software issues and provide frontline support for students, faculty,
              and staff. Assist with workstation setup, device provisioning, and basic network/account support. Maintain clear ticket notes and documentation to ensure consistent resolution and knowledge sharing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>R&D Engineer</h4>
                <h5>RegenWave Medical Instruments</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Developed portable physiotherapy devices integrating dual cold-laser modules with micro-current therapy.
              Led rapid prototyping, bench testing, and iterative design for usability, reliability, and manufacturability. Supported compliance and validation activities (documentation, risk considerations, test planning) and contributed to IP preparation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IoT Intern</h4>
                <h5>TechiesMS</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Built IoT prototypes using microcontrollers and sensors; assisted with integration and testing.
              Supported e-commerce operations and digital listings, strengthening technical and business execution.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>CNC/VMC Intern</h4>
                <h5>Indo German Tool Room</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Assisted in CNC/VMC shop operations and basic process planning; gained exposure to manufacturing workflows and quality practices.
            </p>
          </div>
        </div>

        <h2>
          My <span>Education</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.S. Robotics Engineering</h4>
                <h5>University of Hartford</h5>
              </div>
              <h3>2027</h3>
            </div>
            <p>
              Expected May 2027. Vice President of ASME Student Chapter and member of Assistive Robotics Team (ART).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in Mechatronics</h4>
                <h5>Ganpat University</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Highlights: 3D modeling; biomaterial & multi-material 3D printing (Stratasys DentaJet™); startup grant support (Techbotic).
            </p>
          </div>
        </div>
        
        <h2>
          <span>Awards &</span> Achievements
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>1st Rank</h4>
                <h5>Shodh Shikhar International Research Convention</h5>
              </div>
              <h3>Bhopal</h3>
            </div>
            <p>
              Awarded 1st place at the Shodh Shikhar International Student Research Project Convention.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>1st Rank</h4>
                <h5>Abhigyan-2023 International Techfest</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Achieved 1st place in the international tech competition in India.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Director General Award</h4>
                <h5>Ganpat University</h5>
              </div>
              <h3>Best Student</h3>
            </div>
            <p>
              Awarded Best Student of the Year. <strong>Design Patent Pending (India & USA):</strong> Hand-Held Dual Laser and Micro-Needling Current Device for Advanced Physiotherapy Treatment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
