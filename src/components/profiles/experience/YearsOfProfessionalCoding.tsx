import React, {useEffect, useState} from "react";
import Geography from "../geography/Geography";
import DeveloperRoles from "../roles/DeveloperType";
import CodingAsAHobby from "../roles/CodingAsAHobby";
import {API_BASE_URL} from "../../../constants";
import HorizontalBarChart from "../../charts/HorizontalBarChart";
import ChartSection from "../../ChartSection";

export default function YearsOfProfessionalCoding() {

    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    useEffect(() => {
        fetch(`${API_BASE_URL}/05QNsUfbZ7Ec`)
            .then(response => response.json())
            .then(data =>
                {
                    setData(data.data)
                    setLabels(data.labels)
                }
            )
            .catch(error => console.error(error.toString()))
    }, [setData, setLabels])

    return (
        <ChartSection height={300} labels={labels} data={data} title="Years of Professional Coding">
            <p>Less than 23% of respondents are either mid-level or senior engineers.
                Most of them have less than 5 years of experience. This is consistent with the fact that a
                large number of respondents say that they wrote their first line of code less that 5 years ago.</p>
        </ChartSection>
    )
}