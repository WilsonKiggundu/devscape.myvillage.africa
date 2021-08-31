import React, {useRef} from "react";
import './Overview.css'

export default function Overview() {

    return (
        <div id="overview" className="overview">
            <div className="intro-text">
                State of the Developer Landscape in Uganda,
                <br/>
                2021
            </div>

            <div className="row">
                <div className="col-6 col-md-4">
                    <div className="alert alert-info">
                        <small>Reach</small>
                        <div className="emphasis">1,288</div>
                    </div>
                </div>
                <div className="col-6 col-md-4">
                    <div className="alert alert-info">
                        <small>Completion rate</small>
                        <div className="emphasis">91.7%</div>
                    </div>
                </div>
                <div className="col-6 col-md-4">
                    <div className="alert alert-info">
                        <small>Average time to complete</small>
                        <div className="emphasis">22 Minutes</div>
                    </div>
                </div>
            </div>

            <div className="row mt-5 fs-4">
                <div className="col-12 col-lg-6">
                    <p>We set out to understand the developer ecosystem in Uganda with the aim of starting conversations
                     bridging the gaps therein. We are interested in knowing its size, level of experience, tech stack,
                     how the developers learn and what kind of jobs they are doing.</p>
                    <p>The 2021 annual developer survey is the first of its kind in Uganda that seeks to not only create a
                    platform where developers can be showcased but also to foster discussions around how to
                    close the gaps especially in job placement and talent development.</p>
                    <p>In our effort to reach as many developers as possible, we used a number of channels to create awareness
                    about the survey. These included but not limited to social media, Tech Hubs, emails, word of mouth.</p>

                </div>
                <div className="col-12 col-lg-6">
                    <p>Despite the fact that this was the inaugural survey, we saw a completion rate of over 91% albeit
                        the average completion time was 22 minutes.
                        This validates the importance and relevance of this survey in the developer ecosystem in Uganda.</p>
                    <p>Working with the data at hand, we broke down our analysis by demographics where applicable.
                        We also need to point out that this survey was taken in the middle of the COVID-19 pandemic.
                        Please keep the timing of the survey in mind when reviewing information such as job and salary data.</p>
                    <p>Finally, for those who want to read the full report, you can download it by clicking the button below. We look forward to
                        seeing what you find—if you share on social media, be sure to tag us!</p>

                    {/*<p>*/}
                    {/*    <a className="download-button" href="">Download Report</a>*/}
                    {/*</p>*/}

                </div>
            </div>

        </div>
    )
}