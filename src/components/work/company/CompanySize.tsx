import React, {useEffect, useState} from "react";
import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";

export default function CompanySize() {
    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    useEffect(() => {
        fetch(`${API_BASE_URL}/UvEHMwOPzEBI`)
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
            height={330}
            labels={labels}
            data={data}
            chartTitle="Company Size"
            title="Company Size">

            <p>Most developers work for small to medium sized companies. This means that they lack experience working
            on reasonably sized teams and projects.</p>

        </ChartSection>
    )
}