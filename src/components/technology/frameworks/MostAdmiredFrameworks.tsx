import MainSection from "../../MainSection";
import React, {useEffect, useState} from "react";
import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";

export default function MostAdmiredFrameworks() {
    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    useEffect(() => {
        fetch(`${API_BASE_URL}/i8GzkPGMOwpr`)
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
            height={700}
            labels={labels}
            data={data}
            title="Most admired frameworks / libraries / CMS">

        </ChartSection>
    )
}