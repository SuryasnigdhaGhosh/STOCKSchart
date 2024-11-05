import React, { useEffect, useMemo, useState } from 'react'
import { fetchStockData } from './ApiCall'
import { formatStockData } from './utils'
import ReactApexChart from 'react-apexcharts'
import { AreaOptions } from './constants'

const Chart = ({ symbol }) => {
    const [stockData, setStockData] = useState({})

    useEffect(() => {
        fetchStockData(symbol).then(data =>
            setStockData(data)
        )
    }, [])

    const seriesData = useMemo(() => formatStockData(stockData), [stockData])

    return (
        <ReactApexChart
            series={
                [
                    {
                        data: seriesData
                    }
                ]
            }
            options={AreaOptions}
            type="area"
        />
    )
}

export default Chart