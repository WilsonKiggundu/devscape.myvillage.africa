import React, {useEffect, useState} from "react";
import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";

export default function TechnologyPurchasesInfluence() {
    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    useEffect(() => {
        fetch(`${API_BASE_URL}/wA1mg28noCQj`)
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
            type="pie"
            height={400}
            labels={labels}
            data={data}
            title="Technology Purchases Influence">

            <p>The biggest number of developers say that they have little or no influence when it comes to purchase
             of technology tools in their organisations. As a result, a number of them reported that they are forced
             to use tools which would otherwise not have been their preferred options.</p>

        </ChartSection>
    )
}