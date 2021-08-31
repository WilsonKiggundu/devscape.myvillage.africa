import React, {useRef, useState} from "react";
import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";
import useOnScreen from "../../../hooks/useOnScreen";
import MostLovedOtherFrameworks from "./others/MostLovedOtherFrameworks";

export default function MostLovedFrameworks() {
    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    const ref: any = useRef()
    const isVisible = useOnScreen(ref)

    if (isVisible && data.length === 0) {
        fetch(`${API_BASE_URL}/2HI9rqCwMD0J`)
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
            <ChartSection height={500} labels={labels} data={data}
                          title="Most loved frameworks / libraries / CMS">
                <p>We asked the developer which of the frameworks, libraries or CMS they have used is their favorite.
                    The
                    results are consistent with those of the frameworks mostly used with React coming up on top. This
                    means
                    that developers tend to use the the technologies that they love and not necessarily the ones that
                    are
                    the best for the problem that needs to be solved.</p>
                {/*<MostLovedOtherFrameworks />*/}
            </ChartSection>

        </div>
    )
}