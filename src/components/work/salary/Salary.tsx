import React, {useEffect, useState} from "react";
import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";

export default function Salary() {
    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    useEffect(() => {
        fetch(`${API_BASE_URL}/AnsNzHy4wVaS`)
            .then(response => response.json())
            .then(data => {
                    setData(data.data)
                    setLabels(data.labels)
                }
            )
            .catch(error => console.error(error.toString()))
    }, [setData, setLabels])

    return (
        <ChartSection
            height={300}
            labels={labels}
            data={data}
            title="Salary">

            <p>Developers in Uganda is still grossly underpaid compared to their counterparts in other markets.
            This perhaps explains the increase in the number of engineers working remotely for oversees companies.
             The result is that it is almost impossible to find a mid to senior level engineer willing to work for
             local company.</p>

        </ChartSection>
    )
}