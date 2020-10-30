// code for a basic bar chart
// see https://www.highcharts.com/demo/bar-basic

Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Strawberries', 'Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Kevin and Emily\'s house'
      }
    },
    series: [{
      name: 'Kevin',
      data: [6, 1, 0, 4]
    }, {
      name: 'Emily',
      data: [6, 5, 7, 3]
    }]
  });
