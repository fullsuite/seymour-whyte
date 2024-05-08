(function() {
    // Get the base URL of the instance
    var baseUrl = gs.getProperty('glide.servlet.uri');
    
    // Construct the URL to the incident record
    var incidentUrl = baseUrl + 'incident.do?sys_id=' + current.sys_id;
    
    // Make the URL available to the email template
    template.print(incidentUrl);
})();