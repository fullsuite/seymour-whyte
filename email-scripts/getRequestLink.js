(function() {
    // Get the base URL of the instance
    var baseUrl = gs.getProperty('glide.servlet.uri');
    
    // Construct the URL to the request record
    // Ensure the table name 'sc_request' and field 'sys_id' are correct based on your instance setup
    var requestUrl = baseUrl + 'sc_request.do?sys_id=' + current.sys_id;
    
    // Make the URL available to the email template
    template.print(requestUrl);
})();