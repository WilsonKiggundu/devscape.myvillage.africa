import React, {useRef, useState} from "react";
import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";
import useOnScreen from "../../../hooks/useOnScreen";

export default function EmploymentStatus() {
    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    const ref: any = useRef()
    const isVisible = useOnScreen(ref)

    if (isVisible && data.length === 0) {
        fetch(`${API_BASE_URL}/e6mmjtQuuffv`)
            .then(response => response.json())
            .then(data => {
                    setData(data.data)
                    setLabels(data.labels)
                }
            )
            .catch(error => console.error(error.toString()))
    }

    return (
        <div id="employment" ref={ref}>
            <ChartSection
                height={600}
                type="pie"
                labels={labels}
                data={data}
                chartTitle="Employment Status"
                title="Employment Status">

                <p>Only 30% of the respondents are in full-time employment. This is surprising because we also know that
                    there a huge demand for developers. This could be because of the lack of experience that the
                    employers
                    are looking for.</p>

            </ChartSection>
        </div>

    )
}