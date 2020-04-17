var graphColors = new Array();
graphColors['Revenue (USD Mn)'] = '#fdb813';
graphColors['Revenue (INR Cr)'] = '#33c0ca';
graphColors['EBITDA (USD Mn)'] = '#bfd630';
graphColors['EBITDA (INR Cr)'] = '#ed1846';
graphColors['Total basic O/s Shares (in Mn)'] = '#33c0ca';
graphColors['Closing SP (in INR)'] = '#fdb813';
graphColors['Mcap (INR Mn)'] = '#33c0ca';
graphColors['Mcap (USD Mn)'] = '#bfd630';
graphColors['Employees'] = '#bfd630';

function refreshGraph()
{
    var options = {
        chart: {
            zoomType: "x",
            renderTo: "container",
            type: "column"
        },
        title: {
            text: "HCL Enterprise"
        },
        xAxis: {
            title: {},
            categories: []
        },
        yAxis: {
            title: {
                text: "Amount (In Mn)"
            },
            plotLines: [ {
                value: 0,
                width: 1
            } ]
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        tooltip: {
            formatter: function() {
                return "<b>" + this.y + "</b>";
            }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [ {} ]
    };

    var fInterval = jQuery('#financial_interval option:selected').val();
    var fCompany = jQuery('#financial_company option:selected').val();
    var fYear = jQuery('#financial_year option:selected').val();
    var fAttribute = jQuery('#financial_attribute option:selected').val();

    var currentJsonNode = null;

    jQuery(window.graphJsonData.nodes).each(function(){
        var currentNode = jQuery(this);
        if(currentNode[0]['node']['Company Name'] == fCompany && currentNode[0]['node']['Financial Year'] == fYear){
            currentJsonNode = currentNode[0]['node'];
        }
    });

    var quaters = [];
    var graphData = [];
    var xAxisTitle = '';
    var yAxisTitle = fAttribute;
    var graphTitle = fCompany;
    var graphColor = graphColors[fAttribute];

    if(fYear != 'all' && fInterval == 'quarter'){
       /* quaters.push('Q1 (' + fYear + ')' );
        quaters.push('Q2 (' + fYear + ')' );
        quaters.push('Q3 (' + fYear + ')' );
        quaters.push('Q4 (' + fYear + ')' );*/

		quaters.push(currentJsonNode['Quarter 1 Title'] );
        quaters.push(currentJsonNode['Quarter 2 Title'] );
        quaters.push(currentJsonNode['Quarter 3 Title'] );
        quaters.push(currentJsonNode['Quarter 4 Title'] );

        if(currentJsonNode != null){
            graphData.push(parseFloat(currentJsonNode[fAttribute + ' [Quarter 1]']));
            graphData.push(parseFloat(currentJsonNode[fAttribute + ' [Quarter 2]']));
            graphData.push(parseFloat(currentJsonNode[fAttribute + ' [Quarter 3]']));
            graphData.push(parseFloat(currentJsonNode[fAttribute + ' [Quarter 4]']));
        }
    }
    if(fYear != 'all' && fInterval == 'year'){
        quaters.push('FY (' + fYear + ')' );
        if(currentJsonNode != null){
            graphData.push(parseFloat(currentJsonNode[fAttribute + ' [Year]']));
        }
    }

    if(fYear == 'all'){
        jQuery('#financial_year option').each(function(){
            if(jQuery(this).val() != 'all' && jQuery(this).val() != '0'){
                var currentYear = jQuery(this).val();
                quaters.push('FY (' + currentYear + ')' );
                var flag = false;
                jQuery(window.graphJsonData.nodes).each(function(){
                    var currentNode = jQuery(this);
                    if(currentNode[0]['node']['Company Name'] == fCompany && currentNode[0]['node']['Financial Year'] == currentYear){
                        graphData.push(parseFloat(currentNode[0]['node'][fAttribute + ' [Year]']));
                        flag = true;
                    }
                });
                if(!flag){
                    graphData.push(0);   
                }
            }
        });
    }

    if(fYear == 'all' || fInterval == 'year'){
        xAxisTitle = 'Year';
    }
    else{
        xAxisTitle = 'Quarter';
    }

    options.title.text = graphTitle;
    options.xAxis.title.text = xAxisTitle;
    options.yAxis.title.text = yAxisTitle;
    options.xAxis.categories = quaters;
    options.series[0].fillColor = graphColor;
    options.series[0].color = graphColor;
    options.series[0]["data"] = graphData;
    chart = new Highcharts.Chart(options);
}

