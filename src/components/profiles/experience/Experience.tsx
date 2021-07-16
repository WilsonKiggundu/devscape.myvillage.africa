import React from "react";
import YearsOfExperience from "./YearsOfExperience";
import YearsOfProfessionalCoding from "./YearsOfProfessionalCoding";
import MainSection from "../../MainSection";

export default function Experience() {
    return (
        <MainSection title="Experience">
            <YearsOfExperience />
            <YearsOfProfessionalCoding />
        </MainSection>
    )
}