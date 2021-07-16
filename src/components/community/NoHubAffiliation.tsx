import React, {useEffect, useState} from "react";

import {API_BASE_URL} from "../../constants";
import ChartSection from "../ChartSection";

export default function NoHubAffiliation() {

    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    useEffect(() => {
        fetch(`${API_BASE_URL}/jxJullPyw3zC`)
            .then(response => response.json())
            .then(data => {
                    setData(data.data)
                    setLabels(data.labels)
                }
            )
            .catch(error => console.error(error.toString()))
    }, [setData, setLabels])

    return (

        <ChartSection chartTitle="Why are you not affiliated to any hub?"
                      height={250}
                      labels={labels} data={data} />
    )
}