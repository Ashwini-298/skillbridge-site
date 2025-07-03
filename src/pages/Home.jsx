import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../assets/Images/banner.jpg";

function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
      {/* Banner */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "400px",
          overflow: "hidden",
        }}
      >
        <img
          src={bannerImg}
          alt="Banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(60%)",
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
          <h1 style={{ fontSize: "2.8rem", marginBottom: "10px" }}>
            Shape Your Future with SkillBridge
          </h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
            Empowering your career with expert training, real internships, and
            development services.
          </p>

          <Link to="/courses">
            <button
              style={{
                padding: "12px 24px",
                fontSize: "16px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Explore Courses
            </button>
          </Link>
        </div>
      </div>

      {/* Why Choose SkillBridge - Updated Design */}
      <section
        style={{
          padding: "60px 20px",
          backgroundColor: "#f0f2f5",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "40px", fontSize: "2rem" }}>
          Why Choose SkillBridge?
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "30px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              width: "280px",
              backgroundColor: "#fff",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ fontSize: "40px" }}>🧑‍🏫</div>
            <h3 style={{ marginTop: "15px", fontSize: "18px" }}>
              Expert Trainers
            </h3>
            <p style={{ fontSize: "14px", color: "#666" }}>
              Learn from professionals with real-world IT & corporate
              experience.
            </p>
          </div>

          {/* Card 2 */}
          <div
            style={{
              width: "280px",
              backgroundColor: "#fff",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ fontSize: "40px" }}>🚀</div>
            <h3 style={{ marginTop: "15px", fontSize: "18px" }}>
              Live Internships
            </h3>
            <p style={{ fontSize: "14px", color: "#666" }}>
              Hands-on projects with real-time tools and tasks just like
              companies.
            </p>
          </div>

          {/* Card 3 */}
          <div
            style={{
              width: "280px",
              backgroundColor: "#fff",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ fontSize: "40px" }}>🎯</div>
            <h3 style={{ marginTop: "15px", fontSize: "18px" }}>
              100% Placement Support
            </h3>
            <p style={{ fontSize: "14px", color: "#666" }}>
              Resume building, mock interviews, referrals & career counseling.
            </p>
          </div>
        </div>
      </section>

      {/* Our Top Courses */}
      <section
        style={{
          padding: "50px 20px",
          backgroundColor: "#f4f4f4",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "30px" }}>📚 Our Top Courses</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          {/* Cloud Computing */}
          <div
            style={{
              width: "260px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ fontSize: "40px" }}>☁️</div>
            <h3 style={{ margin: "10px 0" }}>Cloud Computing</h3>
            <p style={{ fontSize: "14px", color: "#555" }}>
              Learn to deploy and manage cloud services using AWS, Azure, and
              more.
            </p>
          </div>

          {/* Full Stack Web Development */}
          <div
            style={{
              width: "260px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ fontSize: "40px" }}>💻</div>
            <h3 style={{ margin: "10px 0" }}>Full Stack Web Development</h3>
            <p style={{ fontSize: "14px", color: "#555" }}>
              Master front-end and back-end technologies to build real-world web
              apps.
            </p>
          </div>

          {/* Python with Data Science */}
          <div
            style={{
              width: "260px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ fontSize: "40px" }}>🐍</div>
            <h3 style={{ margin: "10px 0" }}>Python with Data Science</h3>
            <p style={{ fontSize: "14px", color: "#555" }}>
              Analyze data, build models, and unlock insights using Python.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div style={{ padding: "30px", textAlign: "center" }}>
        <p style={{ fontSize: "1.1rem", marginBottom: "15px" }}>
          Ready to start your career journey?
        </p>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Home;
