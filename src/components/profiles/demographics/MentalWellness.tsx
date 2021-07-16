import React, {useEffect, useState} from "react";
import HorizontalBarChart from "../../charts/HorizontalBarChart";

import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";

export default function MentalWellness() {

    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    useEffect(() => {
        fetch(`${API_BASE_URL}/Gbz6pD1DlWiq`)
            .then(response => response.json())
            .then(data => {
                    setData(data.data)
                    setLabels(data.labels)
                }
            )
            .catch(error => console.error(error.toString()))
    }, [setData, setLabels])

    return (

        <ChartSection chartTitle="Do you relate with any of these?" height={250} labels={labels} data={data} title="Mental Well-being">
            <p>Since this survey was conducted during the COVID-19 pandemic, we sought to check the metal well-being
                of the respondents. This was especially important because many workplaces don't care about the metal state
            of their employees. More so, the society in which we live is yet to embrace the importance of someone's metal well-being.</p>
            <p>We asked the respondents if they relate with any mental disorder with the intention of creating awareness about this critical aspect of humanity. What we found was that
                almost 2 in 10 respondents are not sure of their mental state while almost 13 in every 100 respondents have some kind of mental
             disorder.</p>
        </ChartSection>
    )
}