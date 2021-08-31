import React, {useRef, useState} from "react";
import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";
import useOnScreen from "../../../hooks/useOnScreen";

export default function MostAdmiredFrameworks() {
    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    const ref: any = useRef()
    const isVisible = useOnScreen(ref)

    if (isVisible && data.length === 0) {
        fetch(`${API_BASE_URL}/i8GzkPGMOwpr`)
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
                color="#90a4ae"
                height={500}
                labels={labels}
                data={data}
                title="Most admired frameworks / libraries / CMS">
                <p>Again, the results are in tandem with the most loved and used frameworks, libraries and CMS. This
                    shows that developers tend to use technologies that they admire (and not necessarily the ones that
                    are best for the problem they seek to solve).</p>
            </ChartSection>
        </div>
    )
}