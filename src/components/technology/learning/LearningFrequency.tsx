import React, {useRef, useState} from "react";
import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";
import useOnScreen from "../../../hooks/useOnScreen";

export default function LearningFrequency() {
    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    const ref: any = useRef()
    const isVisible = useOnScreen(ref)

    if (isVisible && data.length === 0) {
        fetch(`${API_BASE_URL}/ns2OT9zFt4BC`)
            .then(response => response.json())
            .then(data => {
                    setData(data.data)
                    setLabels(data.labels)
                }
            )
            .catch(error => console.error(error.toString()))
    }

    return (
        <div ref={ref}>
            <ChartSection
                type="pie"
                height={600}
                labels={labels}
                data={data}
                title="How often do you learn a new technology?">
                <p>As expected, over 85% of the respondents say that they are hungry for knowledge. This is very good
                    for the ecosystem since technology keeps changing every minute. For any ecosystem to grow, the key
                    stakeholders need to be willing and able to learn all the time.</p>

                <p>We see that there is a very huge opportunity to tap into this willingness to learn at all levels
                    including
                    Government and the private sector. Education institution can tap into this to introduce courses that
                    speak to this hunger for knowledge.</p>

            </ChartSection>
        </div>

    )
}