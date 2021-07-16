import React, {useEffect, useState} from "react";
import {API_BASE_URL} from "../../../../constants";
import ChartSection from "../../../ChartSection";

export default function MostUsedOtherFrameworks() {
    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    useEffect(() => {
        fetch(`${API_BASE_URL}/JT9YH8iaTJoI`)
            .then(response => response.json())
            .then(data => {
                    setData(data.data)
                    setLabels(data.labels)
                }
            )
            .catch(error => console.error(error.toString()))
    }, [setData, setLabels])

    return (

        <ChartSection height={700} labels={labels} data={data} title="Most used frameworks / libraries / CMS">

        </ChartSection>
    )
}