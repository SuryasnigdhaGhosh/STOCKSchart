
export const fetchStockData = async (symbol) => {
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=NMYH5R0D3L6ON12M`)
    const data = await response.json()
    return data
}