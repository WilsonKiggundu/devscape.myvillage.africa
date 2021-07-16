import MainSection from "../../MainSection";
import React from "react";
import DeveloperAge from "./DeveloperAge";
import MentalWellness from "./MentalWellness";
import Gender from "./Gender";

export default function Demographics() {
    return <MainSection title={"Demographics"}>
        <div className="pt-5">
            <a className="section-link" href="#age">Age <i className="bi bi-arrow-right" /></a><br/>
            <a className="section-link" href="#mental-well-being">Mental Well-being <i className="bi bi-arrow-right" /></a><br/>
            <a className="section-link" href="#gender">Gender <i className="bi bi-arrow-right" /></a><br/>
        </div>

        <DeveloperAge />
        <MentalWellness />
        <Gender />

    </MainSection>
}