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
            height={220}
            labels={labels}
            data={data}
            title="How do you choose the tools?">

        </ChartSection>
    )
}