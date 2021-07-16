import React, {useEffect, useState} from "react";
import HorizontalBarChart from "../../charts/HorizontalBarChart";

import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";

export default function UndergraduateMajor() {

    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    useEffect(() => {
        fetch(`${API_BASE_URL}/urJrnwBNEuJo`)
            .then(response => response.json())
            .then(data => {
                    setData(data.data)
                    setLabels(data.labels)
                }
            )
            .catch(error => console.error(error.toString()))
    }, [setData, setLabels])

    return (

        <ChartSection height={500} labels={labels} data={data} title="Undergraduate Major">
            <p>Computer science, computer engineering, software engineering are the most popular disciplines. 42.5%
             of all respondents did one of these at Undergraduate level. Information systems, information technology are the second most popular.</p>
            <p>When we did more analysis of the data, we found that these disciplines are more synonymous with respondents that have less than 5 years of
             coding experience. The more experienced respondents reported that they did other engineering disciplines like Civil, Electrical, Mechanical and Telecommunications Engineering at undergraduate level.</p>
        </ChartSection>
    )
}