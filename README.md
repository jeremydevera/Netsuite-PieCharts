# Netsuite-PieCharts
To create a Suitelet that uses the amCharts library for rendering a pie chart, follow these steps. Here's how you can structure your Suitelet code:
1. Include the amCharts Library in the Script: Use the amCharts JavaScript and CSS resources in your Suitelet.
2. Build the HTML and Embed the Chart: The Suitelet will render an HTML page where the amCharts library is used to display the chart.
3. 
define(['N/file'], function (file) {
    function onRequest(context) {
        if (context.request.method === 'GET') {
            // Load the HTML file from the File Cabinet
            var htmlFile = file.load({
                id: 'SuiteScripts/amcharts.html' // Adjust path as needed
            });

    context.response.write({
        output: htmlFile.getContents()
    });
        }
    }

    return {
        onRequest: onRequest
    };
});
![image](https://github.com/user-attachments/assets/369bb193-5737-4de3-8fb1-de5d35b4dc96)
