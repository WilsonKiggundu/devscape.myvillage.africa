import React, {useEffect, useState} from "react";
import HorizontalBarChart from "../../charts/HorizontalBarChart";

import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";

export default function EducationalAttainment() {

    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    useEffect(() => {
        fetch(`${API_BASE_URL}/Hh63Bs2yGlnr`)
            .then(response => response.json())
            .then(data => {
                    setData(data.data)
                    setLabels(data.labels)
                }
            )
            .catch(error => console.error(error.toString()))
    }, [setData, setLabels])

    return (

        <ChartSection height={250} labels={labels} data={data} title="Educational Attainment">
            <p>All respondents reported that they have some level of education. None of the respondents said that they
                have an kind of doctoral degrees. Needless to say, 65.4% have a Bachelor's degree and 8%
                have a Master's degree.</p>
        </ChartSection>
    )
}