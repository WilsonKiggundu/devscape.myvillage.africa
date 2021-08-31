import React, {useRef, useState} from "react";
import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";
import useOnScreen from "../../../hooks/useOnScreen";

export default function MostPopularLanguages() {
    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    const ref: any = useRef()
    const isVisible = useOnScreen(ref)

    if (isVisible && data.length === 0) {
        fetch(`${API_BASE_URL}/BC94rOAbryVu`)
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
            <ChartSection height={700} labels={labels} data={data} title="Most Popular Languages">
                <p>Over the last year, we have been closely following all jobs posted and a huge number of them
                    explicitly state the programming languages. Through this survey, we wanted to know the most commonly
                    used and popular programming languages by developers in Uganda. We gave respondents up to 3 choices
                    HTML, CSS and JavaScript take the lion's share of popularity.</p>
                <p>TypeScript is also starting to gain popularity while C# continues to struggle among the developer
                    community in Uganda.</p>
            </ChartSection>
        </div>

    )
}