import React, {useRef, useState} from "react";
import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";
import useOnScreen from "../../../hooks/useOnScreen";

export default function MostDreadedFrameworks() {
    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    const ref: any = useRef()
    const isVisible = useOnScreen(ref)

    if (isVisible && data.length === 0) {
        fetch(`${API_BASE_URL}/atxBs26O4cIM`)
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
                height={500}
                labels={labels}
                data={data}
                title="Most dreaded frameworks / libraries / CMS">
                <p>This was perhaps a controversial one but very important. We sought to know which of the technologies
                    the
                    developers fear most. Most of the fear or dread comes from misconceptions although in some cases
                    some
                    technologies are just too hard to understand because of their steep learning curve.</p>
                <p>jQuery came up on top especially with younger developers. Most of the respondents that are above 30
                    years of age did not have any problem with it. This is most likely because of the ever reducing
                    popularity of jQuery as a result of the emergence of React, Angular and Vue. So, if you have a
                    legacy system that uses jQuery that you want to maintain, you will most likely struggle to find a
                    developer.</p>
            </ChartSection>
        </div>

    )
}