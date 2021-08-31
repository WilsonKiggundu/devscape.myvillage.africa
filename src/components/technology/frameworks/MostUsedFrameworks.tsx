import React, {useRef, useState} from "react";
import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";
import AngularLogo from "../../../images/angular-logo.png"
import VueLogo from "../../../images/vue-logo.png"
import ReactLogo from "../../../images/react-logo.png"
import useOnScreen from "../../../hooks/useOnScreen";
import MostUsedOtherFrameworks from "./others/MostUsedOtherFrameworks";

export default function MostUsedFrameworks() {
    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    const ref: any = useRef()
    const isVisible = useOnScreen(ref)

    if (isVisible && data.length === 0) {
        fetch(`${API_BASE_URL}/CfSWd33Jzvhf`)
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
            <ChartSection height={550} labels={labels} data={data} chartTitle="Most used frameworks, libraries, CMS"
                          title="Most used frameworks / libraries / CMS">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <img className="mb-3" style={{height: 80, width: 'auto'}} src={AngularLogo}/>
                        <p>
                            <strong><a href="https://angular.io/" className="orange"
                                       target="_blank">Angular</a></strong>,
                            developed by Google, was first released in 2010, making it the oldest of the lot. It is a
                            TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release
                            of
                            Angular 2. The latest stable version is Angular 11, which was released in November 2020.</p>
                    </div>
                    <div className="col-12 col-lg-6">
                        <img className="mb-3" style={{height: 80, width: 'auto'}} src={VueLogo}/>
                        <p><strong><a href="https://vuejs.org/" className="orange" target="_blank">Vue</a></strong>, was
                            developed by ex-Google employee Evan You in 2014. Over the last three years, Vue has seen a
                            substantial shift in popularity,
                            even though it doesn’t have the backing of a large company. The current stable version is
                            3.0,
                            released in September 2020.</p>
                    </div>
                    <div className="col-12 col-lg-6">
                        <img className="mb-3" style={{height: 80, width: 'auto'}} src={ReactLogo}/>
                        <p><strong><a href="https://reactjs.org/" className="orange" target="_blank">React</a></strong>,
                            developed by Facebook, was initially released in 2013. Facebook uses React extensively in
                            their
                            products (Facebook, Instagram, and WhatsApp). The current stable version is 17.X, released
                            in
                            October 2020 (with smaller incremental updates since then).</p>
                    </div>
                </div>

                <p>According to the survey results, each of the developers that responded have used React.js, Vue.js or
                    Angular to build web
                    applications with React being the most commonly used. This can be attributed to the fact that
                    when <a
                        href="https://andela.com" target="_blank" className="orange">Andela</a> was still running
                    bootcamps
                    in Uganda, their technology stack included React (and MongoDb, Express, NodeJs). This is consistent
                    with
                    the <a href="https://insights.stackoverflow.com/survey/2021#technology-most-popular-technologies"
                           target="_blank" className="orange">latest report released by Stackoverflow</a></p>
                <p>
                    For building websites, Wordpress takes the lion's share with over 40% of the respondents
                    reporting that they have used it to build a website. The uptake of Drupal is still very low while
                    Django continues
                    to grow with nearly 37% of the developers saying that they have used it.
                </p>
            </ChartSection>

            {/*<MostUsedOtherFrameworks />*/}


        </div>
    )
}