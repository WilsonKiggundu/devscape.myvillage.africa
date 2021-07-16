import HorizontalBarChart from "./charts/HorizontalBarChart";
import React from "react";
import PieChart from "./charts/PieChart";

interface IProps {
    text: any[],
    title?: string,
    children?: any,
    color?: string
}

export default function LabelsSection({title, text, children, ...rest}: IProps) {

    const id = title?.toLowerCase().replaceAll(" ", "-")

    return (
        <div id={id} className="mt-5 mb-3">
                {title && <h5 className="mb-3">{title}</h5>}
                <div className="row mb-3">
                    <div className="col-12 col-lg-8">
                        {children}
                    </div>
                </div>

            <div className="row">
                <div className="col-12">
                    <div className="labels-container">
                        {text.filter(f => f).map((t: string, index: number) => {
                            return <span key={index} className="chip">{t}</span>
                        })}
                    </div>
                </div>
            </div>

            </div>
    )
}