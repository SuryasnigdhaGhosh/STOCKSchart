import React from 'react'
import Chart from './Chart'
import "./stockchart.css"

const StockChart = (props) => {
    return (
        <div className="chart-container">
            <div className="chart">
                <Chart symbol={props.ticker} />
            </div>
            <div className="description">
                <h2>{props.name}</h2>
                <h3>{props.ticker}</h3>
                <p  >{props.desc}</p>
            </div>
        </div>
    )
}

export default StockChart
