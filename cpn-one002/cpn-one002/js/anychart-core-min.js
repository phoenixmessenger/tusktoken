anychart.onDocumentReady(function () {

    // set the data
    var data = [
        { x: "Liquidity Pool", value: 15 },
        { x: "Staking Pool", value: 10 },
        { x: "Advertising and Team", value: 10 },
        { x: "Burning", value: 12.5 },
        { x: "to WWF", value: 2.5 },

    ];

    // create the chart
    var chart = anychart.pie();

    // set the chart title
    chart.title("Tocenomics");

    // add the data
    chart.data(data);

    // set legend position
    chart.legend().position("right");
    // set items layout
    chart.legend().itemsLayout("vertical");

    // display the chart in the container
    chart.container('container');
    chart.draw();

});