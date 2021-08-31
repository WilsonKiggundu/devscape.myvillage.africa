import React from "react";
import MainSection from "../MainSection";
import MostPopularLanguages from "./languages/MostPopularLanguages";
import MostUsedFrameworks from "./frameworks/MostUsedFrameworks";
import MostLovedFrameworks from "./frameworks/MostLovedFrameworks";
import MostDreadedFrameworks from "./frameworks/MostDreadedFrameworks";
import MostAdmiredFrameworks from "./frameworks/MostAdmiredFrameworks";
import MostUsedOtherFrameworks from "./frameworks/others/MostUsedOtherFrameworks";
import MostLovedOtherFrameworks from "./frameworks/others/MostLovedOtherFrameworks";
import MostDreadedOtherFrameworks from "./frameworks/others/MostDreadedOtherFrameworks";
import MostAdmiredOtherFrameworks from "./frameworks/others/MostAdmiredOtherFrameworks";
import MostUsedDatabases from "./databases/MostUsedDatabases";
import MostLovedDatabases from "./databases/MostLovedDatabases";
import MostDreadedDatabases from "./databases/MostDreadedDatabases";
import MostAdmiredDatabases from "./databases/MostAdmiredDatabases";
import MostUsedPlatforms from "./devplatforms/MostUsedPlatforms";
import MostLovedPlatforms from "./devplatforms/MostLovedPlatforms";
import MostDreadedPlatforms from "./devplatforms/MostDreadedPlatforms";
import MostAdmiredPlatforms from "./devplatforms/MostAdmiredPlatforms";
import ToolsUsed from "./ides/ToolsUsed";
import ChoosingTools from "./ides/ChoosingTools";
import LearningFrequency from "./learning/LearningFrequency";
import WhenYouGetStuck from "./learning/WhenYouGetStuck";
import FeelingAboutPurpleLinks from "./learning/FeelingAboutPurpleLinks";
import TechnologyPurchasesInfluence from "./learning/TechnologyPurchasesInfluence";

export default function Technology() {
    return (
        <MainSection title="Technology">
            <div className="pt-5">
                
            </div>
            <div className="pt-5">
                <a className="section-link" href="#most-popular-technologies">Most Popular Technologies <i
                    className="bi bi-arrow-right"/></a><br/>
                <a className="section-link" href="#most-dreaded-technologies">Most Loved, Dreaded and Wanted <i
                    className="bi bi-arrow-right"/></a><br/>
                <a className="section-link" href="#ides-and-tools">Development Environments and Tools <i
                    className="bi bi-arrow-right"/></a><br/>
                <a className="section-link" href="#learning-and-problem-solving">Learning & Problem Solving <i
                    className="bi bi-arrow-right"/></a><br/>
            </div>

            <MostPopularLanguages/>
            <MostUsedFrameworks/>

            <MostLovedFrameworks />
            <MostDreadedFrameworks/>
            <MostAdmiredFrameworks />

            <MostUsedOtherFrameworks />
            <MostLovedOtherFrameworks />
            <MostDreadedOtherFrameworks />
            <MostAdmiredOtherFrameworks />

            <MostUsedDatabases />
            <MostLovedDatabases />
            <MostDreadedDatabases />
            <MostAdmiredDatabases />

            <MostUsedPlatforms />
            <MostLovedPlatforms />
            <MostDreadedPlatforms />
            <MostAdmiredPlatforms />

            <ToolsUsed />
            <ChoosingTools />

            <LearningFrequency />
            <WhenYouGetStuck />
            <FeelingAboutPurpleLinks />
            <TechnologyPurchasesInfluence />
        </MainSection>
    )
}