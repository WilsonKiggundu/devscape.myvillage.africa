import React, {useEffect, useRef, useState} from "react";
import {API_BASE_URL} from "../../../constants";
import HorizontalBarChart from "../../charts/HorizontalBarChart";
import ChartSection from "../../ChartSection";
import useOnScreen from "../../../hooks/useOnScreen";

export default function YearsOfExperience() {

    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    const ref: any = useRef()
    const isVisible = useOnScreen(ref)

    if (isVisible && data.length === 0){
        fetch(`${API_BASE_URL}/KbDOn4JKyJ4Y`)
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
            <ChartSection height={250} labels={labels} data={data} title="Years since Learning to Code">
                <p>We wanted to know when the respondents wrote their first line of Code so that we analyse their growth rate.
                    Over 65% of respondents wrote their <strong>Hello, World!</strong> program less than 5 years ago.</p>
            </ChartSection>
        </div>
    )
}