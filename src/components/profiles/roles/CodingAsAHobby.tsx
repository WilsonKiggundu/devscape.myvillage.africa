import React, {useEffect, useState} from "react";
import HorizontalBarChart from "../../charts/HorizontalBarChart";

import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";

export default function CodingAsAHobby() {

    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    useEffect(() => {
        fetch(`${API_BASE_URL}/Ts7kfw2ojDdP`)
            .then(response => response.json())
            .then(data => {
                    setData(data.data)
                    setLabels(data.labels)
                }
            )
            .catch(error => console.error(error.toString()))
    }, [setData, setLabels])

    return (

        <ChartSection type="pie" height={350} labels={labels} data={data} title="Coding as a Hobby">
            <p>One third of the respondents code for fun. Most of these are self-taught
                coders who find coding fascinating and fun.
                About 7% don't know if they want to code professionally or as a hobby.</p>
        </ChartSection>
    )
}