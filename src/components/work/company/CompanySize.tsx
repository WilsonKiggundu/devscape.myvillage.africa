import React, {useRef, useState} from "react";
import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";
import useOnScreen from "../../../hooks/useOnScreen";

export default function CompanySize() {
    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    const ref: any = useRef()
    const isVisible = useOnScreen(ref)

    if (isVisible && data.length === 0) {
        fetch(`${API_BASE_URL}/UvEHMwOPzEBI`)
            .then(response => response.json())
            .then(data => {
                    setData(data.data)
                    setLabels(data.labels)
                }
            )
            .catch(error => console.error(error.toString()))
    }

    return (
        <div id="company-information" ref={ref}>
            <ChartSection
                color="#00bfa5"
                height={330}
                labels={labels}
                data={data}
                title="Company Size">
                <p>Most developers work for small to medium sized companies. This means that they lack experience
                    working on reasonably sized teams and projects.</p>
            </ChartSection>
        </div>
    )
}