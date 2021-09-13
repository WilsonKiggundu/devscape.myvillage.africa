import React, {useRef, useState} from "react";
import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";
import useOnScreen from "../../../hooks/useOnScreen";

export default function WorkingOvertime() {
    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    const ref: any = useRef()
    const isVisible = useOnScreen(ref)

    if (isVisible && data.length === 0) {
        fetch(`${API_BASE_URL}/JEhCyx9jwooa`)
            .then(response => response.json())
            .then(data => {
                    setData(data.data)
                    setLabels(data.labels)
                }
            )
            .catch(error => console.error(error.toString()))
    }

    return (
        <div ref={ref} id="working-overtime">
            <ChartSection
                height={180}
                labels={labels}
                data={data}
                title="Working Overtime">
                <p>9 in 10 respondents reported that they work overtime. 51% of these find themselves working overtime at least one day a week. We know that developers enjoy coding and so they always work longer hours simply because they love what they are doing. For some, it is the pressure to keep updated with the current trends that forces them to stay at work longer.</p>
                <p>Regardless of the reasons they have for working overtime, it is important for them to find the right balance so that they don't <a href="https://www.zdnet.com/article/developer-burnout-isnt-going-away-employers-need-to-act-now/" className="orange">
                    burn out.
                </a></p>
            </ChartSection>
        </div>
    )
}
