import React, {useEffect, useState} from "react";
import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";

export default function WhenYouGetStuck() {
    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    useEffect(() => {
        fetch(`${API_BASE_URL}/BW6KIb070HZb`)
            .then(response => response.json())
            .then(data => {
                    setData(data.data)
                    setLabels(data.labels)
                }
            )
            .catch(error => console.error(error.toString()))
    }, [setData, setLabels])

    return (
        <ChartSection
            height={320}
            labels={labels}
            data={data}
            title="What do you do when you get stuck?">

            <p>Have you every heard of Stack Overflow? If not, then you should pick interest in it because 8 in 10 of your
             developers run to it whenever you give them a coding challenge that they can't solve. Even more, if you
                have been wondering who consumes your bandwidth, you may want to know that 72%
                of your development team opt to watch video tutorials when they get stuck.</p>

            <p>The good news is that only 2 in 100 developers get into panic mode when they get stuck.</p>

        </ChartSection>
    )
}