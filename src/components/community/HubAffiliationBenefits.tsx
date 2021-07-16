import React, {useEffect, useState} from "react";

import {API_BASE_URL} from "../../constants";
import ChartSection from "../ChartSection";

export default function HubAffiliationBenefits() {

    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    useEffect(() => {
        fetch(`${API_BASE_URL}/chNOFEti2QSf`)
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
            title="How beneficial is your affiliation to these hubs?"
            height={250}
            labels={labels}
            data={data} />
    )
}