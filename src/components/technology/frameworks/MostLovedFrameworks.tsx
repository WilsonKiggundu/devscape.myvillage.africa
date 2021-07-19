import MainSection from "../../MainSection";
import React, {useEffect, useState} from "react";
import {API_BASE_URL, COLORS} from "../../../constants";
import ChartSection from "../../ChartSection";

export default function MostLovedFrameworks() {
    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    useEffect(() => {
        fetch(`${API_BASE_URL}/2HI9rqCwMD0J`)
            .then(response => response.json())
            .then(data => {
                    setData(data.data)
                    setLabels(data.labels)
                }
            )
            .catch(error => console.error(error.toString()))
    }, [setData, setLabels])

    return (

        <ChartSection color="#64b5f6" height={700} labels={labels} data={data} title="Most loved frameworks / libraries / CMS">

        </ChartSection>
    )
}