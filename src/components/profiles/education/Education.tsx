import MainSection from "../../MainSection";
import React from "react";
import EducationalAttainment from "./EducationalAttainment";
import UndergraduateMajor from "./UndergraduateMajor";
import FormalEducationImportance from "./FormalEducationImportance";
import OnlineCertifications from "./OnlineCertifications";

export default function Education() {
    return <MainSection title={"Education"}>
        <div className="pt-5">
            <a className="section-link" href="#educational-attainment">Educational Attainment <i className="bi bi-arrow-right" /></a><br/>
            <a className="section-link" href="#undergraduate-major">Undergraduate Major <i className="bi bi-arrow-right" /></a><br/>
            <a className="section-link" href="#formal-education-importance">Formal Education Importance <i className="bi bi-arrow-right" /></a><br/>
            <a className="section-link" href="#online-certifications">Online Certifications <i className="bi bi-arrow-right" /></a><br/>
        </div>

        <EducationalAttainment />
        <UndergraduateMajor />
        <FormalEducationImportance />
        <OnlineCertifications />
    </MainSection>
}