import * as Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React from "react";

interface IProps {
    chartTitle?: string,
    height?: number,
    label?: string,
    labels: string[],
    data: any[],
    children?: any,
    color?: string
}

export default function HorizontalBarChart(props: IProps) {

    const options : any = {
        chart: {
            type: 'bar',
            reflow: true,
            backgroundColor: '#2c3548',
            height: props.height
        },
        title: {
            text: props.chartTitle,
            style: {
                color: '#FFF',
                fontSize: '15px'
            }
        },
        xAxis: {
            lineWidth: 0,
            enabled: false,
            lineColor: 'transparent',
            categories: props.labels,
            labels: {
                style: {
                    color: '#fff'
                }
            },
            color: '#ffffff',
            title: {
                text: null,
            }
        },
        yAxis: {
            min: 0,
            lineWidth: 0,
            labels: {
                enabled: false
            },
            lineColor: 'transparent',
            gridLineColor: 'transparent',
            title: {
                enabled: false,
                text: '% of respondents',
                align: 'middle'
            },
        },
        tooltip: {
            valueSuffix: ' %',
            enabled: false
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    format: '{y}%',
                    inside: false,
                    style: {
                        color: '#fff'
                    }
                },
                borderColor: props.color ?? '#ffe7a9',
                pointWidth: 25,
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            enabled: false,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'region',
            color: props.color ?? '#ffe7a9',
            data: props.data
        }]
    };


    return <>

        {props.children}

        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    </>
}