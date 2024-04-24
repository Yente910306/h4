// Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
Highcharts.chart('container', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Monthly Average Temperature'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature" ' +
            'target="_blank">Wikipedia.com</a>'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        accessibility: {
            description: 'Months of the year'
        }
    },
    yAxis: {
        title: {
            text: 'Temperature'
        },
        labels: {
            format: '{value}°'
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [
    {
        name: 'L.A.',
        marker: {
            symbol: 'square'
        },
        data: [20.1, 20.3, 21.2, 22.6, 23.6, 25.6, 28.4, {
            y: 29.1,
            marker: {
                symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
            },
            accessibility: {
                description: 'Sunny symbol, this is the warmest point in the chart.'
            }
        }, 28.4, 25.8, 22.7, 19.8]

    }, 
    {
        name: 'NewYork',
        marker: {
            symbol: 'diamond'
        },
        data: [3.5,5.3, 9.8, 16.2, 21.6, 26.3, {
            y: 28.9,
            marker: {
                symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
            },
            accessibility: {
                description: 'Sunny symbol, this is the warmest point in the chart.'
            }
        },  28.1, 24, 17.7, 12.1,6.1]
    },
    {
        name: 'Miami',
        marker: {
            symbol: 'circle'
        },
        data: [23.7,24.3,25.1,26.6,28.2,30.1,31.3,{
            y: 31.5,
            marker: {
                symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
            },
            accessibility: {
                description: 'Sunny symbol, this is the warmest point in the chart.'
            }
        }, 30.5,28.7,26.4,24.4]
    }
    ]
});