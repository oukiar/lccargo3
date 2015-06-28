//BY NEURONS ART AND TECHNOLOGY ALL RIGHTS RESERVED AND COPYRIGHTED.
//IN ASSOCIATION WITH LC CARGO XPRESS LOS ANGELES
//SISTEM PLANIFICATION BY LC CARGO XPRESS
//AUTHORS: SUI GENERIS / OSCAR ALCANTARA

require('cloud/app.js');

Parse.Cloud.define("restore", function(request, response) {
    Parse.Cloud.useMasterKey();
    var queryWarehouse = new Parse.Query("Receipts");
    queryWarehouse.equalTo("objectId", request.params.receiptId);
    
    queryWarehouse.first().then(function(results) 
    {
        //obtenemos el status anterior
        oldstat = results.get("Status");
        
        
        results.set("Status", oldstat.split(":")[1] );
        results.save();
        response.success("Receipt restored");
    });
});

Parse.Cloud.define("sendMail", function(request, response) {
    var Mandrill = require('mandrill');
    Mandrill.initialize('HyML8A-jJEV4rGScp2w2Sw');

    Mandrill.sendEmail(
    {
        message: 
        {
            text: request.params.text,
            subject: request.params.subject,
            from_email: request.params.from_email,
            from_name: request.params.from_name,
            to: [
            {
                email: request.params.to_email,
                name: request.params.to_name
            }]
        },
        async: true
    },
        
    {
        success: function(httpResponse) {
        console.log(httpResponse);
        response.success("Email sent!");
        },
        error: function(httpResponse) {
        console.error(httpResponse);
        response.error("Uh oh, something went wrong");
        }
    });
});


Parse.Cloud.define("updateClientInfo", function(request, response) {
    Parse.Cloud.useMasterKey();    
    var user = Parse.User.current(); 
    var query = new Parse.Query("User");
    query.include("ClientID");
    query.get(user.id, {success:function(usr){
            usr.get("ClientID").set("Name", request.params.clientName );
            usr.get("ClientID").save();
        }});
    
    response.success("Update Successful!");
	 response.error("Sorry!");
 });

