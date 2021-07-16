import HorizontalBarChart from "./charts/HorizontalBarChart";
import React from "react";
import PieChart from "./charts/PieChart";

interface IProps {
    labels: string[],
    seriesLabel?: string,
    data: any[],
    title?: string,
    chartTitle?: string
    children?: any,
    height?: number,
    type?: string,
    color?: string,
    ref?: any
}

export default function ChartSection({type, title, children, ...rest}: IProps) {

    const id = title?.toLowerCase().replaceAll(" ", "-")

    return (
        <>
            {type === 'pie' ?
                <PieChart {...rest}>
                    <div id={id} className="mt-5 mb-3">
                        {title && <h5 className="mb-3">{title}</h5>}
                        <div className="row mb-3">
                            <div className="col-12 col-lg-8">
                                {children}
                            </div>
                        </div>
                    </div>
                </PieChart> :
                <HorizontalBarChart {...rest}>
                    <div id={id} className="mt-5 mb-3">
                        {title && <h5 className="mb-3">{title}</h5>}
                        <div className="row mb-3">
                            <div className="col-12 col-lg-8">
                                {children}
                            </div>
                        </div>
                    </div>
                </HorizontalBarChart>}
        </>
    )
}