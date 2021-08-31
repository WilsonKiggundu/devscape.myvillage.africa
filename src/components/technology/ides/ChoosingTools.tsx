import React, {useEffect, useState} from "react";
import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";

export default function ChoosingTools() {
    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    useEffect(() => {
        fetch(`${API_BASE_URL}/kAOhPvKkTXrQ`)
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
            color="#90a4ae"
            type="pie"
            height={600}
            labels={labels}
            data={data}
            title="How do you choose the tools?">
            <p>We asked the respondents about how they decide to choose the tools that they use. We wanted to understand
                if the choices are purely random or well thought through. The majority of the respondents ask fellow
                developers about the tools before they decide to use them and only 7 in every 100 developers do research
                about the tools before they start using them.</p>
        </ChartSection>
    )
}