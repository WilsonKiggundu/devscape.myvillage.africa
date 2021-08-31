import React, {useRef, useState} from "react";
import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";
import useOnScreen from "../../../hooks/useOnScreen";

export default function ToolsUsed() {
    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    const ref: any = useRef()
    const isVisible = useOnScreen(ref)

    if (isVisible && data.length === 0) {
        fetch(`${API_BASE_URL}/RzxiIlkI7SnG`)
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
                height={400}
                labels={labels}
                data={data}
                chartTitle="Most used collaboration tools"
                title="Most used collaboration tools">
                <p>The most effective way to maximize the productivity of your development team is to use collaboration
                    tools. Software developers these days are not expected to work full-time without even contacting or
                    communicating with each other for long. If there is no collaboration among the workers, your
                    million-dollar worth of a product cannot sustain since it’s been developed in a
                    communication-restrictive environment.</p>
                <p>Sharing ideas and suggestions, free communication and quick meet-ups to discuss even the smallest
                    detail, are the major factors behind the success of a software product. In order to ensure seamless,
                    effective and productive communication between project managers, their team members, and other
                    subordinates, organizations are adopting different collaboration tools.</p>
                <p>We asked the respondents which tools they use most to collaborate when working on a team and nearly
                    all of them said that they use <a href="https://github.com/" target="_blank"
                                                      className="orange">Github</a>. <a href="https://slack.com/"
                                                                                        target="_blank"
                                                                                        className="orange">Slack</a> is
                    also a favorite for developers especially for meetings, instant messages and sharing code snippets.
                </p>
            </ChartSection>
        </div>

    )
}