import React, {useEffect, useRef, useState} from "react";
import HorizontalBarChart from "../../charts/HorizontalBarChart";

import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";
import useOnScreen from "../../../hooks/useOnScreen";

export default function Geography() {

    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    const ref: any = useRef()
    const isVisible = useOnScreen(ref)

    if (isVisible && data.length === 0){
        fetch(`${API_BASE_URL}/ibA6fAuGZ5BE`)
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
            <ChartSection seriesLabel="Region" type="pie" height={500} labels={labels} data={data} title="Geography">
                <p>Over 97% of the respondents said they live in Uganda. A few are Ugandans who live abroad
                    mainly within the East African region.</p>
                <p>Most of the developers are located in central Uganda.
                    However, we are starting to see an increase in the number of developers in other
                    regions that coincides with the launch of The Innovation Village in those regions.</p>
            </ChartSection>
        </div>
    )
}