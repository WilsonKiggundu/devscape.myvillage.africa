import React, {useEffect, useState} from "react";
import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";

export default function EmploymentStatus() {
    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    useEffect(() => {
        fetch(`${API_BASE_URL}/e6mmjtQuuffv`)
            .then(response => response.json())
            .then(data => {
                    setData(data.data)
                    setLabels(data.labels)
                }
            )
            .catch(error => console.error(error.toString()))
    }, [setData, setLabels])

    return (
        <ChartSection
            height={230}
            labels={labels}
            data={data}
            chartTitle="Employment Status"
            title="Employment Status">

            <p>Only 30% of the respondents are in full-time employment. This is surprising because we also know that
            there a huge demand for developers. This could be because of the lack of experience that the employers
            are looking for.</p>

        </ChartSection>
    )
}