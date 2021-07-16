import React from "react";

interface IProps {
    title: string
    children: any
}

export default function MainSection({title, children} : IProps) {

    const id = title.toLowerCase()
        .replaceAll(" ", "-")
        .replaceAll(",", "")

    return (
        <div id={id} className="with-divider">
            <div className="row">
                <div className="col-10">
                    <h1>{title}</h1>
                </div>
            </div>

            {children}
        </div>
    )
}