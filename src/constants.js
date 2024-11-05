export const AreaOptions = {
    chart: {
        type: "area",
        foreColor: "#ccc",
        
    },
    
    grid: {
        borderColor: "#555",
        clipMarkers: false,
        yaxis: {
            lines: {
                show: false
            }
        }
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        gradient: {
            enabled: true,
            opacityFrom: 0.55,
            opacityTo: 0
        }
    },
    markers: {
        size: 5,
        colors: ["#000524"],
        strokeColor: "#00BAEC",
        strokeWidth: 3
    },
    tooltip: {
        theme: "dark"
    },
    title: {
        text: "Area Chart",
        align: "left",
    },
    xaxis: {
        type: "datetime",
    },
    yaxis: {
        tooltip: {
            enabled: true,
        },
    },
};

