import React, {useEffect, useRef, useState} from "react";
import HorizontalBarChart from "../../charts/HorizontalBarChart";

import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";
import useOnScreen from "../../../hooks/useOnScreen";

export default function FormalEducationImportance() {

    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    const ref: any = useRef()
    const isVisible = useOnScreen(ref)

    if (isVisible && data.length === 0){
        fetch(`${API_BASE_URL}/q3iDdL0jrTSg`)
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
            <ChartSection height={220} labels={labels} data={data} title="Formal Education Importance">
                <p>We asked respondents if their education is important in their current roles. 14% say that it is
                    neither important nor necessary. Trends show that these respondents either Googled their way into coding
                    or did at least one online course.</p>
            </ChartSection>
        </div>
    )
}