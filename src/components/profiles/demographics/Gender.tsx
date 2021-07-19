import React, {useEffect, useRef, useState} from "react";
import HorizontalBarChart from "../../charts/HorizontalBarChart";

import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";
import useOnScreen from "../../../hooks/useOnScreen";

export default function Gender() {

    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    const ref: any = useRef()
    const isVisible = useOnScreen(ref)

    if (isVisible && data.length === 0){
        fetch(`${API_BASE_URL}/oMA6SgOv2iYM`)
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
            <ChartSection seriesLabel="Gender" type="pie" chartTitle="Distribution by Gender" height={450} labels={labels} data={data} title="Gender">
                <p>We wanted to get an idea the distribution of developers based on their gender. In the past, there has been a very wide divide
                    of even up to 90% males and only 10% females. There has been a lot of effort put in to encourage females to
                    aspire to become developers and the results show that nearly 24% of the developers are female. While this number is still low,
                    we believe that this is a step in the right direction.</p>
                <p>We also noted that unlike in the past, some people consider gender as private personal information so they would rather not
                    say their gender. This, we believe, should be important information especially for employers.</p>
            </ChartSection>
        </div>
    )
}