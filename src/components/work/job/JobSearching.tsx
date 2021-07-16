import React, {useEffect, useState} from "react";
import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";

export default function JobSearching() {
    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    useEffect(() => {
        fetch(`${API_BASE_URL}/5whncGDVdQRb`)
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
            type="pie"
            labels={labels}
            data={data}
            title="Are you actively looking for another job?">

        </ChartSection>
    )
}