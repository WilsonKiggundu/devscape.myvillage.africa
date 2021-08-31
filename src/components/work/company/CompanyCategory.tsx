import React, {useEffect, useRef, useState} from "react";
import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";
import useOnScreen from "../../../hooks/useOnScreen";

export default function CompanyCategory() {
    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    const ref: any = useRef()
    const isVisible = useOnScreen(ref)

    if (isVisible && data.length === 0) {
        fetch(`${API_BASE_URL}/XLmPBQFMVjWD`)
            .then(response => response.json())
            .then(data => {
                    setData(data.data)
                    setLabels(data.labels)
                }
            )
            .catch(error => console.error(error.toString()))
    }

    return (
        <div id="company-category" ref={ref}>
            <ChartSection
                color="#00bfa5"
                height={250}
                labels={labels}
                data={data}
                title="Company Category">
                <p>Startups employ the largest number of developers. Whereas Government is the largest consumer of services,
                    only 7% of developers work for Government.</p>
            </ChartSection>
        </div>

    )
}