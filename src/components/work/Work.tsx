import React from "react";
import MainSection from "../MainSection";
import EmploymentStatus from "./employment/EmploymentStatus";
import Salary from "./salary/Salary";
import CompanySize from "./company/CompanySize";
import CompanyCategory from "./company/CompanyCategory";
import Companies from "./company/Companies";
import CompanyOnboarding from "./company/CompanyOnboarding";
import WorkingOvertime from "./company/WorkingOvertime";
import CapacityBuilding from "./company/CapacityBuilding";
import DevOps from "./company/DevOps";
import JobSatisfaction from "./job/JobSatisfaction";
import HoursPerWeek from "./job/HoursPerWeek";
import JobSearching from "./job/JobSearching";
import ReasonsForJobSearch from "./job/ReasonsForJobSearch";
import HowDoYouLearnAboutCompany from "./job/HowDoYouLearnAboutCompany";
import CareerValues from "./values/CareerValues";

export default function Work() {
    return (
        <MainSection title="Work">
            <div className="pt-5">
                <a className="section-link" href="#employment">
                    Employment <i className="bi bi-arrow-right"/></a><br/>
                <a className="section-link" href="company-information">
                    Company Information <i className="bi bi-arrow-right"/></a><br/>
                <a className="section-link" href="#Career Values">
                    Career Values <i className="bi bi-arrow-right"/></a><br/>
                <a className="section-link" href="#looking-for-a-job">
                    Looking for a Job <i className="bi bi-arrow-right"/></a><br/>
                <a className="section-link" href="#job-priorities">
                    Job Priorities <i className="bi bi-arrow-right"/></a><br/>
                <a className="section-link" href="#Salary">
                    Salary <i className="bi bi-arrow-right"/></a><br/>
            </div>

            <EmploymentStatus />
            <Salary />
            <CompanySize />
            <CompanyCategory />
            <Companies />

            <CompanyOnboarding />
            <WorkingOvertime />
            <CapacityBuilding />
            <DevOps />

            <JobSatisfaction />
            <HoursPerWeek />
            <JobSearching />
            <ReasonsForJobSearch />
            <HowDoYouLearnAboutCompany />
            <CareerValues />

        </MainSection>
    )
}