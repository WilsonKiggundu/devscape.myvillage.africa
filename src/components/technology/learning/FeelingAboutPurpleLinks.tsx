import React, {useRef, useState} from "react";
import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";
import useOnScreen from "../../../hooks/useOnScreen";

export default function FeelingAboutPurpleLinks() {
    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    const ref: any = useRef()
    const isVisible = useOnScreen(ref)

    if (isVisible && data.length === 0) {
        fetch(`${API_BASE_URL}/h5sI43IaSjwy`)
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
                type="pie"
                height={400}
                labels={labels}
                data={data}
                title="Those purple links, again!">

                <p>We asked respondents how they feel when they search for a
                    coding solution online and the first result link is purple because they already visited the link.
                    13% of them said that they get annoyed. This is probably because they have tried
                    everything but have failed to get the solution. Even worse, purple links may mean that that is the
                    solution you are looking for but you have just failed to figure it out. It's annoying!
                </p>

            </ChartSection>
        </div>

    )
}
