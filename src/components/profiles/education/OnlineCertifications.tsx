import React, {useEffect, useState} from "react";
import HorizontalBarChart from "../../charts/HorizontalBarChart";

import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";
import OnlineCertificationsProvider from "./OnlineCertificationsProvider";

export default function OnlineCertifications() {

    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    useEffect(() => {
        fetch(`${API_BASE_URL}/8rZcbfSuyMD1`)
            .then(response => response.json())
            .then(data => {
                    setData(data.data)
                    setLabels(data.labels)
                }
            )
            .catch(error => console.error(error.toString()))
    }, [setData, setLabels])

    return (
        <div id="online-certifications" className="row">
            <h5 className="mt-5 mb-3">Online Certifications</h5>

            <div className="cols-12">
                <p>We asked respondents if they have done any online courses. Almost two thirds have an online certification.
                    As expected, over 34% of the respondents did their online certifications on Coursera. This is mostly because
                    it provides more free courses and is relatively cheaper than that rest for the paid for content.</p>
            </div>

            <div className="cols-12 col-lg-6">
                <ChartSection type="pie" chartTitle="Have you done any online certifications?" height={200} labels={labels} data={data} />
            </div>

            <div className="cols-12 col-lg-6">
                <OnlineCertificationsProvider />
            </div>

        </div>
    )
}