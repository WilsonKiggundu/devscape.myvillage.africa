import React from 'react';
import Sidebar from "./components/sidebar/Sidebar";
import './App.css'
import Header from "./components/header/Header";
import Overview from "./components/overview/Overview";
import KeyResults from "./components/overview/KeyResults";
import DeveloperProfile from "./components/profiles/DeveloperProfile";
import Experience from "./components/profiles/experience/Experience";
import Education from "./components/profiles/education/Education";
import Demographics from "./components/profiles/demographics/Demographics";
import Community from "./components/community/Community";
import Technology from "./components/technology/Technology";
import Work from "./components/work/Work";
import AnythingElse from "./components/AnythingElse";
import {useTracking} from "./hooks/useTracking";

export default function App() {

    useTracking('G-WRQM789W2D')

    return (
        <div className="App">

            <div className="container p-0">
                <div className="row g-0">
                    <div className="col-lg-12">
                        <div className="content">
                            <Header/>
                            <Overview/>
                            <KeyResults/>
                            <DeveloperProfile/>
                            <Experience/>
                            <Education/>
                            <Demographics/>

                            <Technology/>
                            <Work/>

                            <Community/>
                            <AnythingElse/>

                            <small>&copy; All rights reserved.
                                <a href="https://innovationvillage.co.ug" className="orange">The Innovation Village
                                    Kampala</a>
                            </small>
                        </div>

                    </div>
                </div>
            </div>

            {/*<a className="fab btn btn-success">*/}
            {/*    <i className="bi bi-list"/>*/}
            {/*</a>*/}


        </div>
    );
}
