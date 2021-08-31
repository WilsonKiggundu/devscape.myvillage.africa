import React, {useEffect, useRef, useState} from "react";
import HorizontalBarChart from "../../charts/HorizontalBarChart";

import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";
import useOnScreen from "../../../hooks/useOnScreen";

export default function EducationalAttainment() {

    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    const ref: any = useRef()
    const isVisible = useOnScreen(ref)

    if (isVisible && data.length === 0){
        fetch(`${API_BASE_URL}/Hh63Bs2yGlnr`)
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
            <ChartSection color={"#f15c80"} height={180} labels={labels} data={data} title="Educational Attainment">
                <p>All respondents reported that they have some level of education. Needless to say, 65.4% have a
                    Bachelor's degree and 8% have a Master's degree. This also shows that most developers think that online courses provided by Udacity, Udemy, Coursera etc weigh a lot more than a typical MSc. Computer Science or Software Engineering.</p>
                    <p>In fact, for a number of developers interviewed, we found that in terms of one's ability to develop software, those who have taken these online courses had a better understanding of the development lifecycle (had more hands-on experience) than those with only a master's degree.</p>
            </ChartSection>
        </div>
    )
}