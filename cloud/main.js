//BY NEURONS ART AND TECHNOLOGY ALL RIGHTS RESERVED AND COPYRIGHTED.
//IN ASSOCIATION WITH LC CARGO XPRESS LOS ANGELES
//SISTEM PLANIFICATION BY LC CARGO XPRESS
//AUTHORS: SUI GENERIS / OSCAR ALCANTARA

require('cloud/app.js');

Parse.Cloud.define("restore", function(request, response) {
	Parse.Cloud.useMasterKey();
	  var queryWarehouse = new Parse.Query("Warehouses");
	  queryWarehouse.equalTo("objectId", request.params.receiptId);
	  queryWarehouse.first().then(function(results) {
    results.set("Status", "NotProcessed");
    results.save();
	response.success("works");
			});
		});