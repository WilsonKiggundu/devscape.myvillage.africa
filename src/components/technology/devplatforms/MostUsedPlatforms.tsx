import React, {useRef, useState} from "react";
import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";
import useOnScreen from "../../../hooks/useOnScreen";

export default function MostUsedPlatforms() {
    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    const ref: any = useRef()
    const isVisible = useOnScreen(ref)

    if (isVisible && data.length === 0) {
        fetch(`${API_BASE_URL}/W88yEqJ00cDF`)
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
            <ChartSection chartTitle="Most used platforms"
                          height={500} labels={labels}
                          data={data}
                          title="Developer Platforms">
                <p>Over the years, software development has ping-ponged between server-centric and client-centric
                    designs. Today, with dominant mobile platforms like iOS and Android, apps have entered a hybrid
                    client-server architecture.</p>
                <p>What this means for developers is that they have to juggle more technologies than ever before. And in
                    response, we’re seeing the rise of developer platforms that handle functionality that has never been
                    outsourced before—everything from databases to sending email to providing user authentication. As
                    more software moves to the cloud so too does the development tools used to make the final
                    product.</p>
                <p>Everyday, platforms are reducing the amount of time developers have to focus on non-app specific
                    code. What this means is that apps can be developed faster at higher quality with a tighter focus on
                    the core product. Yes, you are ceding some control over your app’s development to a third-party, but
                    the whole point of these developer platforms is to do one thing very well at scale. The time for
                    developer platforms is now, and it will only accelerate as more of the world comes online.</p>
                <p>We therefore asked the developers which platforms they use, love, admire or dread most. Windows and
                    Linux are the most used platforms with the former used by 73% of the respondents. This, we believe,
                    is due to the fact that Windows PCs are more available, accessible and cheaper than Apple
                    Computers.</p>
                <p>It is also 3 times more likely for you to find an Android developer as opposed to an iOS developer
                    according to the responses from this survey.</p>
            </ChartSection>
        </div>
    )
}