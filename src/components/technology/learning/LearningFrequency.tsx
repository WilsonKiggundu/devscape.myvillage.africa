import React, {useEffect, useState} from "react";
import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";

export default function LearningFrequency() {
    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    useEffect(() => {
        fetch(`${API_BASE_URL}/ns2OT9zFt4BC`)
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
            height={400}
            labels={labels}
            data={data}
            title="How often do you learn a new technology?">

            <p>As expected, over 85% of the respondents say that they are hungry for knowledge. This is very good
             for the ecosystem since technology keeps changing every minute. For any ecosystem to grow, the key
             stakeholders need to be willing and able to learn all the time.</p>

            <p>We see that there is a very huge opportunity to tap into this willingness to learn at all levels including
             Government and the private sector. Education institution can tap into this to introduce courses that
             speak to this hunger for knowledge.</p>

        </ChartSection>
    )
}