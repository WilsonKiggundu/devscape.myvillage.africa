import React, {useRef, useState} from "react";
import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";
import useOnScreen from "../../../hooks/useOnScreen";

export default function CompanyOnboarding() {
    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    const ref: any = useRef()
    const isVisible = useOnScreen(ref)

    if (isVisible && data.length === 0) {
        fetch(`${API_BASE_URL}/hJeoHMW0rqbx`)
            .then(response => response.json())
            .then(data => {
                    setData(data.data)
                    setLabels(data.labels)
                }
            )
            .catch(error => console.error(error.toString()))
    }


    return (
        <div ref={ref} id="onboarding-processes">
            <ChartSection
                type="pie"
                labels={labels}
                data={data}
                title="Onboarding Processes">
                <p>Developer onboarding is a very critical process that needs to be undertaken whenever a new developer
                    is onboarded onto a project. However, as the data shows, nearly half of the respondents say that
                    their companies don't have an onboarding process. This is very risky. You have to put these
                    processes in place to ensure that your product does not change significantly with changes in the
                    developers otherwise down the road, it will be very difficult to maintain and support the
                    product.</p>

                <p>Even more, you may be losing your great hires too soon because of lack of a proper onboarding
                    process <a target={"_blank"}
                               href="https://www.forbes.com/sites/jeffhyman/2018/09/12/onboarding-fail/?sh=6474ee7e4700"
                               className="orange">according to Forbes magazine.</a></p>
            </ChartSection>
        </div>

    )
}
