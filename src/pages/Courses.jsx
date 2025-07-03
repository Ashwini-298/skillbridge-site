import React from "react";
import { Link } from "react-router-dom";
import cloudImg from "../assets/Images/cloudcomputing.png";
import fullstackImg from "../assets/Images/full stack.png";
import pythonImg from "../assets/Images/python.png";

function Courses() {
  const courseList = [
    {
      title: "Cloud Computing",
      image: cloudImg,
      description:
        "Master AWS, Azure, and Google Cloud with real-world deployment skills.",
      path: "#",
    },
    {
      title: "Full Stack Web Development",
      image: fullstackImg,
      description:
        "Learn frontend (React) and backend (Node, MongoDB) to build complete web apps.",
      path: "#",
    },
    {
      title: "Python",
      image: pythonImg,
      description:
        "Analyze data using Python, NumPy, Pandas, and build real analytics projects.",
      path: "#",
    },
  ];

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Our Courses</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {courseList.map((course, index) => (
          <Link
            to={course.path}
            key={index}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                width: "300px",
                border: "1px solid #ccc",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.03)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img
                src={course.image}
                alt={course.title}
                style={{ width: "100%", height: "180px", objectFit: "cover" }}
              />
              <div style={{ padding: "15px" }}>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <button
                  style={{
                    marginTop: "10px",
                    padding: "8px 16px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Courses;
