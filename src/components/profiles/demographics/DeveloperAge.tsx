import React, {useEffect, useRef, useState} from "react";
import HorizontalBarChart from "../../charts/HorizontalBarChart";

import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";
import useOnScreen from "../../../hooks/useOnScreen";

export default function DeveloperAge() {

    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    const ref: any = useRef()
    const isVisible = useOnScreen(ref)

    if (isVisible && data.length === 0){
        fetch(`${API_BASE_URL}/v9qtgapaUVRg`)
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
            <ChartSection height={350} labels={labels} data={data} title="Age">
                <p>You saw this coming, didn't you? The average developer is less than 30 years old. Let that sink in a bit. Surprised? You shouldn't be.
                    Uganda is a predominantly young population. In fact <a className="orange" href="https://www.worldometers.info/world-population/uganda-population/" target="_blank">Worldometers</a> reports that an average Ugandan is 16 years old.</p>
                <p>But like with all data, there are outliers. One person in particular said they are past their 60th birthday.</p>
            </ChartSection>
        </div>
    )
}