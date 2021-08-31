import React, {useEffect, useRef, useState} from "react";
import HorizontalBarChart from "../../charts/HorizontalBarChart";

import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";
import useOnScreen from "../../../hooks/useOnScreen";

export default function LearningHowToCode() {

    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    const ref: any = useRef()
    const isVisible = useOnScreen(ref)

    if (isVisible && data.length === 0){
        fetch(`${API_BASE_URL}/SB6YpKeykphG`)
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
            <ChartSection type={"pie"} height={600} labels={labels} data={data} title="Learning how to Code">
                <p>We asked the respondents how they learnt how to code. The results show that almost one third
                    learnt coding through online courses while about 44% learnt in school.</p>
                <p>Most of the respondents that are above 30 years old say that they Googled their way to coding. This is
                    probably because at the time they got into coding, either the schools were not teaching students how to code
                    or online courses were not as popular.</p>
            </ChartSection>
        </div>
    )
}