import React, {useEffect, useState} from "react";

import {API_BASE_URL} from "../../constants";
import ChartSection from "../ChartSection";

export default function HubAffiliationWhatsMissing() {

    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    useEffect(() => {
        fetch(`${API_BASE_URL}/73XrTpGmLHwd`)
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
            title="What is missing in the Hubs?"
            height={250}
            labels={labels} data={data}>

            <p>We wanted to know what the respondents think is missing in the Hubs in Uganda. We believe that this data
             would be beneficial to the hubs as they scope out their key areas of focus as they seek to serve the
            needs of the tech ecosystem in Uganda.</p>

        </ChartSection>
    )
}