/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */
define(['N/file'], function (file) {
    function onRequest(context) {
        if (context.request.method === 'GET') {
            // Load the HTML file from the File Cabinet
            var htmlFile = file.load({
                id: 'SuiteScripts/amcharts.html' // Adjust path as needed
            });

            // Send the content of the HTML file as the response
            context.response.write({
                output: htmlFile.getContents()
            });
        }
    }

    return {
        onRequest: onRequest
    };
});
