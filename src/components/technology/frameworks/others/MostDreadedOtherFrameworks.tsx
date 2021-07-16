import React, {useEffect, useState} from "react";
import {API_BASE_URL} from "../../../../constants";
import ChartSection from "../../../ChartSection";

export default function MostDreadedOtherFrameworks() {
    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    useEffect(() => {
        fetch(`${API_BASE_URL}/4hUpWpofI5NL`)
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
            color="#ef9a9a"
            height={700}
            labels={labels}
            data={data}
            title="Most dreaded frameworks / libraries / CMS">

        </ChartSection>
    )
}