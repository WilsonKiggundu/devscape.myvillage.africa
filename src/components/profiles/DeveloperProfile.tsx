import React from "react";
import Geography from "./geography/Geography";
import DeveloperRoles from "./roles/DeveloperType";
import CodingAsAHobby from "./roles/CodingAsAHobby";
import MainSection from "../MainSection";
import LearningHowToCode from "./roles/LearningHowToCode";

export default function DeveloperProfile() {
    return (
        <MainSection title="Developer Profile">
            <Geography />
            <DeveloperRoles />
            <CodingAsAHobby />
            <LearningHowToCode />
        </MainSection>
    )
}