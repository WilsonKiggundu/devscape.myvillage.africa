import React, {useEffect, useState} from "react";

import {API_BASE_URL} from "../../constants";
import ChartSection from "../ChartSection";

export default function HubAffiliationByName() {

    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    useEffect(() => {
        fetch(`${API_BASE_URL}/pAoPYEgNVbHD`)
            .then(response => response.json())
            .then(data => {
                    setData(data.data)
                    setLabels(data.labels)
                }
            )
            .catch(error => console.error(error.toString()))
    }, [setData, setLabels])

    return (

        <ChartSection chartTitle="Which hub are you affiliate to?" type="pie" height={500} labels={labels} data={data}>
            <p>We noticed that despite the fact that <a className="orange" href="https://refactory.ug" target="_blank">Refactory</a> is a fairly
                new entrant, 24% of the developers say they have an affiliation to it.</p>
        </ChartSection>
    )
}