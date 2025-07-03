import React from "react";
import bannerImg from "../assets/Images/about.jpg"; // optional image

function About() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
      {/* Top Banner */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "300px",
          overflow: "hidden",
        }}
      >
        <img
          src={bannerImg}
          alt="About Banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(65%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "2.5rem" }}>About SkillBridge</h1>
        </div>
      </div>

      {/* Content */}
      <div
        style={{ padding: "50px 20px", maxWidth: "1000px", margin: "0 auto" }}
      >
        <p style={{ fontSize: "1.1rem", marginBottom: "30px" }}>
          <strong>SkillBridge</strong> is a trusted platform for IT training,
          live internships, and web & app development services. We help students
          and professionals build job-ready skills through hands-on learning,
          mentorship, and industry exposure.
        </p>

        {/* Mission & Vision */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            marginBottom: "40px",
          }}
        >
          {/* Mission */}
          <div style={cardStyle}>
            <h3 style={{ marginBottom: "10px" }}>🎯 Our Mission</h3>
            <p>
              To bridge the skill gap between education and industry by
              providing high-quality, practical IT training and career
              opportunities.
            </p>
          </div>

          {/* Vision */}
          <div style={cardStyle}>
            <h3 style={{ marginBottom: "10px" }}>🚀 Our Vision</h3>
            <p>
              To become a leading force in shaping future tech professionals and
              entrepreneurs through impactful training programs.
            </p>
          </div>
        </div>

        {/* Why SkillBridge */}
        <div
          style={{
            backgroundColor: "#f8f9fa",
            padding: "30px",
            borderRadius: "10px",
          }}
        >
          <h3 style={{ marginBottom: "15px" }}>💡 Why SkillBridge?</h3>
          <ul style={{ lineHeight: "1.8", paddingLeft: "20px" }}>
            <li>✅ Certified Trainers & Industry Experts</li>
            <li>✅ Live Internship & Certification</li>
            <li>✅ HR & Recruitment Support</li>
            <li>✅ Website & App Development Solutions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  flex: "1 1 300px",
  backgroundColor: "#ffffff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};

export default About;
