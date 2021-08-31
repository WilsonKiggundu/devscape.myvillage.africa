import React, {useEffect, useRef, useState} from "react";
import HorizontalBarChart from "../../charts/HorizontalBarChart";

import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";
import useOnScreen from "../../../hooks/useOnScreen";

export default function MentalWellness() {

    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    const ref: any = useRef()
    const isVisible = useOnScreen(ref)

    if (isVisible && data.length === 0){
        fetch(`${API_BASE_URL}/Gbz6pD1DlWiq`)
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
            <ChartSection chartTitle="Do you relate with any of these?" height={200} labels={labels} data={data} title="Mental Well-being">
                <p><a href="" className="orange">The World Health Organization (WHO) estimates</a> that depression and anxiety cost the global economy $1 trillion per year in lost productivity. But WHO also found that for every $1 spent on treating common mental health concerns, there is a return of $4 in improved health and productivity. </p>
                <p>According to <a className="orange" href="https://www.understood.org/articles/en/workplace-mental-health-5-ways-to-support-employee-wellness" target={"_blank"}>Understood</a> there are several ways that a company can support its employees on their mental health journey. Here is a quote from <a target="_blank" className="orange" href="https://www.jeromeschultz.com/" >Dr. Jerome Schultz</a> a clinical neuropsychologist and a lecturer at Harvard Medical School.</p>
                <blockquote>
                    It’s important for managers to be trained to recognize the signs of emotional distress so they can react in a supportive rather than a punitive way. Some employees need people around them to say, ‘Hey, I see you might be feeling stressed. Maybe now is a good time to try some breathing exercises or go take a walk.
                </blockquote>

                <p>It is on the backdrop of this that we sought to check the metal well-being
                    of the respondents. This was especially important because many workplaces don't care about the metal state
                    of their employees. More so, the society in which we live is yet to embrace the importance of someone's metal well-being.</p>
                <p>We asked the respondents if they relate with any mental disorder with the intention of creating awareness about this critical aspect of humanity. What we found was that
                    almost 2 in 10 respondents are not sure of their mental state while almost 13 in every 100 respondents have some kind of mental
                    disorder.</p>
            </ChartSection>

            <div className="pt-5">

            </div>
        </div>

    )
}