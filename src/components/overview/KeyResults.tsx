import React from "react";

export default function KeyResults() {
    return (
        <div id="key-results" className="with-divider">
            <h2>Key Results</h2>
            <p>Here are a few takeaways from the survey that we believe you should not miss.</p>

            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className="alert alert-primary">
                        <i className="bi bi-gender-ambiguous fs-1"/>
                        <p className="mt-5 mb-5">There is still a wide gap between male and female developers with females
                        making up only 23.4% of all the developers in Uganda. Even more, female developers tend to be front-end engineers withe very few of them either backend or fullstack engineers.</p>

                        <a className="btn btn-outline-secondary">Gender <i className="bi bi-arrow-right"/> </a>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="alert alert-warning">
                        <i className="bi bi-people fs-1"/>
                        <p className="mt-5 mb-5">
                            There is almost an even split between respondents that are affiliated to local hubs and those that are not.
                         The majority of those that have no affiliation to any hub say that it is not clear what the hubs do hence they don't see a need to affiliate with any.</p>
                        <a className="btn btn-outline-secondary">Affiliation to hubs <i className="bi bi-arrow-right"/> </a>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="alert alert-info">
                        <i className="bi bi-bug fs-1"/>
                        <p className="mt-5 mb-5">
                            .NET and jQuery are the most dreaded technologies. Perharps this is not not surprising because
                            no one is pushing these technologies.
                        </p>
                            <a className="btn btn-outline-secondary">Most dreaded technologies <i className="bi bi-arrow-right"/> </a>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="alert alert-info">
                        <i className="bi bi-alarm fs-1"/>
                        <p className="mt-5 mb-5">
                            Half of the respondents feel overworked. They say that they put in 1-2 days every week as overtime. This correlates with the fact that nearly 42% are actively looking for another job.
                        </p>
                            <a className="btn btn-outline-secondary">Job satisfaction <i className="bi bi-arrow-right"/> </a>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="alert alert-warning">
                        <i className="bi bi-suit-heart fs-1"/>
                        <p className="mt-5 mb-5">While majority of the respondents reported that they don't
                            have any mental illness, we noted that almost 6% say they have anxiety disorder.
                         We believe that this important information for anyone looking to hire these people so that they can know how to support them.</p>

                        <a className="btn btn-outline-secondary">Mental well-being <i className="bi bi-arrow-right"/> </a>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="alert alert-secondary">
                        <i className="bi bi-calendar-date fs-1"/>
                        <p className="mt-5 mb-5">
                            The average developer in Uganda is 27 years old and 65% of all respondents say they wrote their first line of code less than 5 years ago. So, if you are looking for a developer, chances are you will not find someone with more than 5 years of working experience.
                        </p>
                        <a className="btn btn-outline-secondary">Developer age <i className="bi bi-arrow-right"/> </a>
                    </div>
                </div>
            </div>

        </div>
    )
}