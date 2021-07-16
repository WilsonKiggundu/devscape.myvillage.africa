import React from "react";
import MainSection from "../MainSection";
import HubAffiliation from "./HubAffiliation";
import HubAffiliationByName from "./HubAffiliationByName";
import HubAffiliationBenefits from "./HubAffiliationBenefits";
import HubAffiliationWhatsMissing from "./HubAffiliationWhatsMissing";

export default function Community() {
    return (
        <MainSection title="Community">
            <HubAffiliation />
            <HubAffiliationByName />
            <HubAffiliationBenefits />
            <HubAffiliationWhatsMissing />
        </MainSection>
    )
}