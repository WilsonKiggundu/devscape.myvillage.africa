import React, {useRef, useState} from "react";
import {API_BASE_URL} from "../../../../constants";
import ChartSection from "../../../ChartSection";
import useOnScreen from "../../../../hooks/useOnScreen";

export default function MostLovedOtherFrameworks() {
    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    const ref: any = useRef()
    const isVisible = useOnScreen(ref)

    if (isVisible && data.length === 0) {
        fetch(`${API_BASE_URL}/vHUUcLVTXfr8`)
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
            <ChartSection color="#64b5f6" height={500} labels={labels} data={data}>
                <p>When we asked them which of these other frameworks they love most, the results were the same; they
                    love
                    what they use.</p>
            </ChartSection>
        </div>
    )
}