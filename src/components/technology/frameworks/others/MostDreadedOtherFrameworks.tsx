import React, {useRef, useState} from "react";
import {API_BASE_URL} from "../../../../constants";
import ChartSection from "../../../ChartSection";
import useOnScreen from "../../../../hooks/useOnScreen";

export default function MostDreadedOtherFrameworks() {
    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    const ref: any = useRef()
    const isVisible = useOnScreen(ref)

    if (isVisible && data.length === 0) {
        fetch(`${API_BASE_URL}/4hUpWpofI5NL`)
            .then(response => response.json())
            .then(data => {
                    setData(data.data)
                    setLabels(data.labels)
                }
            )
            .catch(error => console.error(error.toString()))
    }

    return (
        <div ref={ref}>
            <ChartSection
                color="#ef9a9a"
                height={600}
                labels={labels}
                data={data}>
                <p>Quite surprising to us and perhaps to you is the fact that .NET and .NET Core are very much dreaded
                    by
                    developers yet chances are that your legacy software systems on top of which your core banking
                    system is
                    running was built using .NET Framework.</p>
                <p>.NET and the C# (C-sharp) language have been improved greatly by Microsoft in the recent years and so
                    there is need to popularise their adoption by the developers especially since the demand for .NET
                    engineers globally is going up.</p>
            </ChartSection>
        </div>
    )
}