import React, {useRef, useState} from "react";
import {API_BASE_URL} from "../../../../constants";
import ChartSection from "../../../ChartSection";
import useOnScreen from "../../../../hooks/useOnScreen";

export default function MostUsedOtherFrameworks() {
    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])


    const ref: any = useRef()
    const isVisible = useOnScreen(ref)

    if (isVisible && data.length === 0) {
        fetch(`${API_BASE_URL}/JT9YH8iaTJoI`)
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
            <ChartSection height={600} labels={labels} data={data} title="Other frameworks / libraries / CMS">
                <p>There are other frameworks and libraries that are not so common among developers. We sought to know
                    if any of the respondents used them and what their thoughts are on them. Unsurprisingly, Node.js
                    took came on top. Nearly 7 in 10 developers said that they have used it. React Native came in
                    distant second place while almost no one used Chef.</p>
            </ChartSection>
        </div>
    )
}