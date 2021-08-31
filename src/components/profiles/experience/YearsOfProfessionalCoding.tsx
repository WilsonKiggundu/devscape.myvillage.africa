import React, {useEffect, useRef, useState} from "react";
import Geography from "../geography/Geography";
import DeveloperRoles from "../roles/DeveloperType";
import CodingAsAHobby from "../roles/CodingAsAHobby";
import {API_BASE_URL} from "../../../constants";
import HorizontalBarChart from "../../charts/HorizontalBarChart";
import ChartSection from "../../ChartSection";
import useOnScreen from "../../../hooks/useOnScreen";

export default function YearsOfProfessionalCoding() {

    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    const ref: any = useRef()
    const isVisible = useOnScreen(ref)

    if (isVisible && data.length === 0){
        fetch(`${API_BASE_URL}/05QNsUfbZ7Ec`)
            .then(response => response.json())
            .then(data => {
                    setData(data.data)
                    setLabels(data.labels)
                }
            )
            .catch(error => console.error(error.toString()))
    }

    return (
        <div ref={ref}>
            <ChartSection type={"pie"} height={600} labels={labels} data={data} title="Years of Professional Coding">
                <p>Less than 23% of respondents are either mid-level or senior engineers.
                    Most of them have less than 5 years of experience. To put it into context, when you advertise a job
                    opening for software developers, almost 8 in every 10 applicants will have been coding for less than
                    5 years. That is why the more experienced engineers are hard to come by and will cost you a premium.
                    This is consistent with the fact that a large number of respondents say that they wrote their first
                    line of code less that 5 years ago.</p>
            </ChartSection>
        </div>
    )
}