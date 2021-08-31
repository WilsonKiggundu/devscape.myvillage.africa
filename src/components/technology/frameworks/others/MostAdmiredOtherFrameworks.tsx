import React, {useRef, useState} from "react";
import {API_BASE_URL} from "../../../../constants";
import ChartSection from "../../../ChartSection";
import useOnScreen from "../../../../hooks/useOnScreen";

export default function MostAdmiredOtherFrameworks() {
    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    const ref: any = useRef()
    const isVisible = useOnScreen(ref)

    if (isVisible && data.length === 0) {
        fetch(`${API_BASE_URL}/wfu4Sjy1U7U3`)
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
                color="#90a4ae"
                height={600}
                labels={labels}
                data={data}>
                <p>Again, of these other frameworks and libraries, the ones admired most are those that the developers
                    have tried out. So, if a developer does not admire a framework, they are most likely not to use.
                    This means that one of the key factors that developers consider before they decide to apply for that
                    job or not is the technology stack that is used / required for the job. If they love it, then they
                    most likely will apply for the job.</p>
            </ChartSection>
        </div>

    )
}