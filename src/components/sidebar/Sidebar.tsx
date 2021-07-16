import './Sidebar.css'
import React from "react";

const Sidebar =  () => {
    return (
        <nav id="sidebar">
            <div className="sidebar">
                <ul className="menu">
                    <li className="nav-item">
                        <a href="#overview">Overview</a>
                        <ul className="submenu">
                            <li><a href="#key-results">Key Results</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#developer-profile">Developer Profile</a>
                        <ul className="submenu">
                            <li><a href="#geography">Geography</a></li>
                            <li><a href="#developer-roles">Developer Roles</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#education">Education</a></li>
                            <li><a href="#demographics">Demographics</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#technology">Technology</a>
                        <ul className="submenu">
                            <li><a href="#most-popular-technologies">Most Popular Technologies</a></li>
                            <li><a href="#most-dreaded-technologies">Most Loved, Dreaded, and Wanted</a></li>
                            <li><a href="#ides-and-tools">Development Environments and Tools</a></li>
                            <li><a href="#learning-and-problem-solving">Learning & Problem Solving</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#work">Work</a>
                        <ul className="submenu">
                            <li><a href="#employment">Employment</a></li>
                            <li><a href="#company-information">Company Information</a></li>
                            <li><a href="#career-values">Career Values</a></li>
                            <li><a href="#job-hunting">Looking for a job</a></li>
                            <li><a href="#job-priorities">Job Priorities</a></li>
                            <li><a href="#salary">Salary</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#community">Community</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Sidebar