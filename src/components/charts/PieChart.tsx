import * as Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React from "react";
import {COLORS} from "../../constants";

interface IProps {
    seriesLabel?: string
    chartTitle?: string,
    height?: number,
    label?: string,
    labels: string[],
    data: any[],
    children?: any
}

export default function PieChart(props: IProps) {

    const series : any = [
        {
            name: props.seriesLabel,
            colorByPoint: true,
            data: []
        }
    ]

    const {data, labels} = props

    data.map((d, index) => {
        series[0].data.push({
            name: labels[index],
            color: COLORS[index],
            y: d
        })
    })

    const options : any = {
        chart: {
            type: 'pie',
            backgroundColor: '#2c3548',
            height: props.height,
            plotBorderWidth: 0,
            plotShadow: false,
        },

        title: {
            text: props.chartTitle,
            style: {
                color: '#FFF',
                fontSize: '15px'
            }
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        tooltip: {
            valueSuffix: ' %',
            enabled: true
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b><br/>{point.percentage:.1f} %',
                    distance: 25,
                    connectorWidth: 2,
                    style: {
                        color: '#fff',
                        fontSize: '12px'
                    }
                },
                borderColor: '#2c3548',
                pointWidth: 25,
            }
        },
        credits: {
            enabled: false
        },
        series
    };

    return <>

        {props.children}

        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    </>
}