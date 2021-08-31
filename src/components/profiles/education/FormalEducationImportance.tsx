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
            <ChartSection type={"pie"} height={600} labels={labels}
                          data={data} title="Formal Education Importance">
                <p>14% of the respondents said that their formal education is
                    neither important nor necessary in their current job.</p>
                <p>If you are to dig deep, you will find that this can be attributed to
                    insufficient career guidance. While in school, students choose under graduate degrees based on how well
                    they performed in their Advanced Certificate of Education examinations. What matters at that time is
                    getting into a university. For most of them, however, they get to realise that they don't enjoy what they
                    are doing and decide to switch to other disciplines which are more exciting and fulfilling for them.
                </p>
                <p>
                    Software engineering is one of such disciplines where one can find all the material they need to become a rock star engineer. Every thing you need is freely available online. That is why after 4 years of studying main stream engineering, one can decide to change their career to become a software engineer and if they put their mind to it, their success rate is over 80%.</p>
            </ChartSection>
        </div>
    )
}