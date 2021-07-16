import React, {useEffect, useState} from "react";
import MainSection from "./MainSection";
import {API_BASE_URL} from "../constants";
import LabelsSection from "./LabelsSection";

export default function AnythingElse() {

    const [text, setText] = useState<string[]>([])

    useEffect(() => {
        fetch(`${API_BASE_URL}/KOLwaNg6yOMz`)
            .then(response => response.json())
            .then(data => {
                    setText(data.text)
                }
            )
            .catch(error => console.error(error.toString()))
    }, [setText])

    return (
        <MainSection title="Do you have anything else to say?">
            <p className="mt-3">At the end of the survey, we gave the respondents anything else that they thought was not captured.
            When you read through their submissions, you will be able to draw some conclusion about what they are
             thinking. One that caught our attention was this:</p>
            <blockquote>
                It's good to keep a community of developers and keep us updated because its quite hard to live
                as a low income earner when one is a developer
            </blockquote>

            <LabelsSection text={text}/>
        </MainSection>
    )
}