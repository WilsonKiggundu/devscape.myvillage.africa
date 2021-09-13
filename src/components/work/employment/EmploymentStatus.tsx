import React, {useRef, useState} from "react";
import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";
import useOnScreen from "../../../hooks/useOnScreen";
import MyVillageHomePage from "../../../images/MyVillage_HomePage.jpg"

export default function EmploymentStatus() {
    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    const ref: any = useRef()
    const isVisible = useOnScreen(ref)

    if (isVisible && data.length === 0) {
        fetch(`${API_BASE_URL}/e6mmjtQuuffv`)
            .then(response => response.json())
            .then(data => {
                    setData(data.data)
                    setLabels(data.labels)
                }
            )
            .catch(error => console.error(error.toString()))
    }

    return (
        <div id="employment" ref={ref}>
            <ChartSection
                height={600}
                type="pie"
                labels={labels}
                data={data}
                chartTitle="Employment Status"
                title="Employment Status">

                <p>Only 30% of the respondents are in full-time employment. This is surprising because
                    we also know that there a huge demand for developers. This could be because of the lack of
                    experience that the employers are looking for.</p>

                <p>There has generally been little to no effort in showcasing these developers to the market that is
                    looking for them. Many of them have opted to signup as freelancers with international gig firms
                    which has made it very hard to access them let alone convince them to take up local full-time
                    jobs.</p>
                <p>That is why we opted to build <a href="https://myvillage.africa" className="orange">My Village</a>.
                    We wanted to create a platform where anyone looking for technology talent could go and find it. </p>

            </ChartSection>

            <div style={{margin: "15px 0"}}>
                <iframe width="100%"
                        height="800"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        style={{overflowX: "hidden"}}
                        src="https://myvillage.africa"></iframe>
            </div>
        </div>

    )
}
