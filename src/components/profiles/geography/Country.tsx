import React, {useEffect, useState} from "react";
import HorizontalBarChart from "../../charts/HorizontalBarChart";

import {API_BASE_URL} from "../../../constants";

export default function Country() {

    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    useEffect(() => {
        fetch(`${API_BASE_URL}/AeGaWWy2N8m0`)
            .then(response => response.json())
            .then(data =>
                {
                    setData(data.data)
                    setLabels(data.labels)
                }
            )
            .catch(error => console.error(error.toString()))
    }, [setData, setLabels])

    return (
        <div className="mt-5 mb-5">
            <h4>Country</h4>
            <div className="row mt-5 mb-5">
                <div className="col-12 col-lg-8">
                    We asked the respondents to specify the country in which they are based. We wanted
                    to know how many of the Ugandan developers are based within or outside of Uganda. Over 90% of the respondents were based in Uganda.
                </div>
            </div>
            <HorizontalBarChart labels={labels} data={data}/>
        </div>
    )
}