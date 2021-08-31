import React, {useEffect, useRef, useState} from "react";
import HorizontalBarChart from "../../charts/HorizontalBarChart";

import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";
import useOnScreen from "../../../hooks/useOnScreen";

export default function DeveloperAge() {

    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    const ref: any = useRef()
    const isVisible = useOnScreen(ref)

    if (isVisible && data.length === 0){
        fetch(`${API_BASE_URL}/v9qtgapaUVRg`)
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
            <ChartSection type={"pie"} height={600} labels={labels} data={data} title="Age">
                <p>You saw this coming, didn't you? The average developer is less than 30 years old. Let that sink in a
                    bit. Surprised? You shouldn't be. Uganda is a predominantly young population.
                    <a className="orange" 
                       href="https://www.worldometers.info/world-population/uganda-population/"
                       target="_blank">Worldometers</a> reports that an average Ugandan is 16 years old.</p>
            </ChartSection>

            <div className="pt-5">
                <p>Because developers are predominantly young, they pose their own unique challenges. They bring potent energy, drive and enthusiasm to your company - they want to be challenged and are more confident that they can achieve whatever they put their minds to. However, they also require a lot of attention and feedback, demanding more of a time commitment.</p>
                <p>Like with most of the young employees, you need to:</p>
                <div>
                    <p><strong>Be clear from the outset.</strong> When you interview them, be sure to craft a clear representation of what your company will expect of him or her. Fully explain performance goals, appropriate office behavior, dress code, and office hours. This will open their eyes to the job requirements and what it takes to succeed.</p>
                    <p>
                        <strong>Give them extra structure.</strong> They need defined due dates for reports and detailed schedules for projects in order to properly structure their workday. It is reassuring to them when jobs have regular hours, meetings have agendas, goals are clearly stated, and progress is assessed. You should define success factors so that they know that they are making progress.
                    </p>
                    <p><strong>Teach business standards.</strong> It is important that you instruct them from the beginning about your company’s business standards. They may never have been accountable for meeting strict objectives and might not understand the costs of actions such as using unsuitable language in a business e-mail.</p>
                    <p><strong>Be a mentor.</strong> They want to learn from you and receive your daily feedback. They want your leadership and supervision, to learn about how the company works from the source. You should understand this when you hire them, and plan to spend time teaching and coaching them. They will return your investment in them with their enthusiasm.</p>
                    <p><strong>Give them free rein to multitask.</strong> Keep in mind that because they are young, they can multitask unlike any generation before them. This means that they can send e-mails, talk on the phone, and compose memos at the same time — and enjoy themselves in the process.
                    </p>
                </div>
            </div>

        </div>
    )
}