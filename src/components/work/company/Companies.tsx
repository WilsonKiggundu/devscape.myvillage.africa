import React, {useEffect, useState} from "react";
import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";
import LabelsSection from "../../LabelsSection";

export default function Companies() {
    const [text, setText] = useState<string[]>([])

    useEffect(() => {
        fetch(`${API_BASE_URL}/8tbqHeZJfsLV`)
            .then(response => response.json())
            .then(data => {
                setText(data.text)
                }
            )
            .catch(error => console.error(error.toString()))
    }, [setText])

    return (
        <LabelsSection
            text={text}>
            <p>Where do the developers work?</p>
        </LabelsSection>
    )
}