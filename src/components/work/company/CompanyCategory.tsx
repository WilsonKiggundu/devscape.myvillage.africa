import React, {useEffect, useState} from "react";
import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";

export default function CompanyCategory() {
    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    useEffect(() => {
        fetch(`${API_BASE_URL}/XLmPBQFMVjWD`)
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
            height={250}
            labels={labels}
            data={data}
            title="Company Category">

            <p>Startups employ the largest number of developers. Whereas Government is the largest consumer of services,
             only 7% of developers work for Government.</p>

        </ChartSection>
    )
}