import React from 'react';
import ProfilePic from './ProfilePic';
import './Resume.css'; 

function Resume() {
  return (
    <div className="resume-container">
      <div className="resume">
        <ProfilePic />
        <div className="resume-content">
          <h1 className="resume-name"> Praj Pramod Mhatre</h1>
          <p className="resume-contact">Email: prajmhatre2003@gmail.com</p>
          <p className="resume-contact">Phone: (+91) 9673193860</p>

          <section className="resume-section">
            <h2>Education</h2>
            <ul>
              <li>
                <p>
                  Bharati Vidyapeeth College of Engineering, Navi Mumbai
                  <br />
                  Graduation Year: 2025
                </p>
              </li>
              <li>
                <p>
                  H.S.C SVM College, 2021
                </p>
              </li>
              <li>
                <p>
                  S.S.C K.E.S English Medium School, 2019
                </p>
              </li>
            </ul>
          </section>

          <section className="resume-section">
            <h2>Skills</h2>
            <ul>
              <li>Programming: <ul>1.C</ul> 
                               <ul>2.Java</ul>
                               <ul>3.Python</ul>
                               <ul>4.C++</ul>
              </li>
              <li>Full Stack Web Development :
                               <ul>1.HTML</ul> 
                               <ul>2.CSS</ul>
                               <ul>3.JavaScript</ul> 
              </li>
              <li>Database: 
                               <ul>1.SQL</ul> 
                               <ul>2.Oracle</ul>

              </li>
              <li>Data Structures and Algorithms</li>
            </ul>
          </section>

          <section className="resume-section">
            <h2>Projects</h2>
            <ul>
              <li>
                <p>
                  Project 1: Mock Test App using Java(Android Studio)
                </p>
              </li>
              <li>
                <p>
                  Project 2: Mess Finder using Python(Django Framework)
                </p>
              </li>
            </ul>
          </section>

          <section className="resume-section">
            <h2>Awards & Certification</h2>
            <ul>
              <li>
                <p>
                  Certificate for C++ & Data Structures Course
                </p>
              </li>
              <li>
                <p>
                Certificate for Python Course
                </p>
              </li>
              <li>
                <p>
                Certificate for Full Stack Web Development Course
                </p>
              </li>
            </ul>
          </section>

          <section className="resume-section">
            <h2>Interests</h2>
            <p>Software Development, Artificial Intelligence, Machine Learning</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Resume;
