import React, {useEffect, useState} from "react";

import {API_BASE_URL} from "../../constants";
import ChartSection from "../ChartSection";
import NoHubAffiliation from "./NoHubAffiliation";

export default function HubAffiliation() {

    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    useEffect(() => {
        fetch(`${API_BASE_URL}/WYBF2RGhutOq`)
            .then(response => response.json())
            .then(data => {
                    setData(data.data)
                    setLabels(data.labels)
                }
            )
            .catch(error => console.error(error.toString()))
    }, [setData, setLabels])

    return (

        <div className="row">

            <div className="col-12">
                <h4 className="mt-5 mb-3">Affiliation to Hubs</h4>
                <p>Over the last 5 years, a number of hubs have been opened in Uganda targeting especially developers.
                    We asked respondents if they are affiliated to any of the hubs. It was a almost equal split
                    between those with affiliations and those without any affiliation.
                    For those with no affiliation to any hub, we wanted to know what their reasons are.</p>
            </div>

            <div className="col-12 col-lg-6">
                <ChartSection
                    type="pie"
                    chartTitle="Are you affiliated to any hub in Uganda?"
                    height={250}
                    labels={labels}
                    data={data}/>
            </div>

            <div className="col-12 col-lg-6">
                <NoHubAffiliation/>
            </div>
        </div>


    )
}