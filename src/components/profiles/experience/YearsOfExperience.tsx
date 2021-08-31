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
            <ChartSection type={"pie"} height={600} labels={labels} data={data} title="Years since Learning to Code">
                <p>We wanted to know when the respondents wrote their first line of Code so that we analyse their growth rate.
                    Over 65% of respondents wrote their <strong>Hello, World!</strong> program less than 5 years ago. If you have
                recently tried to hire developers, you would agree with this statistic because the reality is that seasoned
                experienced software developers are hard to find in Uganda.</p>

                <div className="pt-3">It is worth noting, however, that there have been massive efforts in developing, skilling and retooling software developers
                    with the aim of giving them the necessary skills. A number of entities like
                    <a className="orange" target="_blank" href="https://refactory.ug">Refactory</a>,&nbsp;
                    <a className="orange" target="_blank" href="https://innovationvillage.co.ug">The Innovation Village</a>&nbsp;
                     have been at the forefront of this.</div>

            </ChartSection>


        </div>
    )
}