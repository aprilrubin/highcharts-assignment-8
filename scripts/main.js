Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Health care by marital status'
    },
    subtitle: {
        text: 'Source: U.S. Census Bureau'
    },
    xAxis: {
        categories: [
            'Married',
            'Widowed',
            'Divorced',
            'Separated',
            'Never married',
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Percent with insurance coverage'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}% </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: '2018',
        data: [91.7, 86.3, 87.0, 80.1, 84.0]

    }, {
        name: '2019',
        data: [92.4, 86.5, 88.0, 81.0, 84.3]

    }]
});


Highcharts.chart('container2', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Health care and income-to-poverty ratio: Below 100% of poverty'
    },
    subtitle: {
        text: 'Source: U.S. Census Bureau'
    },
    xAxis: {
        categories: ['2015', '2016', '2017', '2018', '2019']
    },
    yAxis: {
        title: {
            text: 'Percent with insurance coverage'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: '%',
        data: [82.6, 83.7, 83, 83.7, 84.1]
    },]
});
