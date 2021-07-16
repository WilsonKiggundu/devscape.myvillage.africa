import React, {useEffect, useState} from "react";
import HorizontalBarChart from "../../charts/HorizontalBarChart";

import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";

export default function DeveloperType() {

    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    useEffect(() => {
        fetch(`${API_BASE_URL}/oSuScIihlH1V`)
            .then(response => response.json())
            .then(data => {
                    setData(data.data)
                    setLabels(data.labels)
                }
            )
            .catch(error => console.error(error.toString()))
    }, [setData, setLabels])

    return (
        <ChartSection height={950} labels={labels} data={data} title="Developer Type">
            <p>48.1% of the respondents identity as Full-stack developers. This means that they can do both
                front-end and back-end development. Globally, the demand for such developers is on the rise.</p>
        </ChartSection>
    )
}