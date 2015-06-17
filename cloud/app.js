//BY NEURONS ART AND TECHNOLOGY ALL RIGHTS RESERVED AND COPYRIGHTED.//IN ASSOCIATION WITH LC CARGO XPRESS LOS ANGELES//SISTEM PLANIFICATION BY LC CARGO XPRESS//AUTHORS: SUI GENERIS / OSCAR ALCANTARA// These two lines are required to initialize Express in Cloud Code.var express = require('express'); var parseExpressCookieSession = require('parse-express-cookie-session');var parseExpressHttpsRedirect = require('parse-express-https-redirect');var app = express();var moment = require('moment');var routes = require('cloud/routes');// Global app configuration sectionapp.set('views', 'cloud/views'); // Specify the folder to find templatesapp.set('view engine', 'ejs');  // Set the template engineapp.use(express.bodyParser()); // Middleware for reading request bodyapp.use(parseExpressHttpsRedirect());// Automatically redirect non-secure urls to secure onesapp.use(express.methodOverride());app.use(express.cookieParser('NeuronsAndLCcargo'));app.use(parseExpressCookieSession({  fetchUser: true,  key: 'image.sess',  cookie: {    maxAge: 3600000 * 24 * 30  }}));app.locals.formatTime = function(time) {  return moment(time).format('MMMM Do YYYY, h:mm a');};//This is an example of hooking up a request handler with a specific request//path and HTTP verb using the Express routing API.app.post('/reset', routes.reset);//app.get('/login', routes.login);//app.get('/logins', routes.logins);app.post('/logins', routes.logins);app.get('/logout_staff', routes.logout_staff);app.get('/register', routes.register);app.get('/subscribe', routes.subscribe);app.post('/subscribe', routes.subscribeCompany);app.get('/registerStore', routes.registerStore);app.post('/client_registration', routes.clientReg);app.post('/agency_registration', routes.agencyReg);app.get('/pendingregistration', routes.pendingRegistration);//After login redirects to profile and in profile show session depending user classapp.get('/profile', routes.profile);//STAFF SECTION//warehouse//app.get('/staff_warehouse', routes.staffWarehouse);app.post('/staff_warehouse_filter', routes.staffWarehouseFilter);app.get('/staff_newLabel', routes.staffNewLabel);app.get('/newlabel', routes.newlabelFloat);app.get('/staff_clientProfile', routes.staff_clientProfile);//REPACKapp.get('/staff_Repack', routes.staff_Repack);app.get('/staff_warehouse', routes.staff_Warehouse);app.get('/zones', routes.zones);app.get('/trash', routes.trash);app.get('/records', routes.records);//InTRANSITapp.get('/staff_sending', routes.staff_sending);app.get('/staff_receiving', routes.staff_receiving);//OPEN AIR SECTIONapp.get('/staff_airSectionNP', routes.staff_airSectionNP);app.get('/staff_airSectionP', routes.staff_airSectionP);app.get('/staff_terrestralSectionNP', routes.staff_terrestralSectionNP);app.get('/staff_terrestralSectionP', routes.staff_terrestralSectionP)app.get('/staff_seaSectionNP', routes.staff_seaSectionNP);app.get('/staff_seaSectionP', routes.staff_seaSectionP)//form of label consolidate with internal notes prefilled//app.get('/staff_warehouse_consolidate/:myparam', routes.staff_warehouse_consolidate);//autofill for newLabel form on warehouseapp.post('/autofill_shipper', routes.autofill_shipper);app.post('/autofill_client', routes.autofill_client);//clients from staff sessionapp.get('/active_clients', routes.activeClients);app.get('/pending_clients', routes.pendingClients);app.get('/staff_reservations', routes.reservations);//agencies from staff sessionapp.get('/staff_agencies', routes.activeAgencies);app.get('/staff_penAgencies', routes.pendingAgencies);app.post('/activateAgency', routes.activateAgency);app.post('/activateClient', routes.activateClient);app.get('/staff_agencyProfile', routes.staff_agencyProfile);//STAFFS SETTINGSapp.get('/staff_mainSettings', routes.staff_mainSettings);app.get('/staff_staffList', routes.staff_staffList);app.get('/addStaff', routes.addStaffSection);app.post('/addStaff', routes.addStaff);app.get('/settings_Clients', routes.settings_Clients);//NEW WAY TO SERVE AJAX REQUESTSapp.post("/getby", routes.getby);app.post("/searchby", routes.searchby);app.post("/getrendered", routes.getrendered);app.post("/getrenderedby", routes.getrenderedby);app.post("/extends", routes.extends);app.post("/update", routes.update);app.post("/deleterow", routes.deleterow);app.post("/test", routes.test);//AGENCIES (STORE) SECTIONapp.get("/agency_newLabel", routes.agency_newLabel);app.get("/agency_profile", routes.agency_profile);app.get("/agency_labels", routes.agency_labels);app.get('/agency_store', routes.agency_store);app.get('/pointofsale', routes.pointofsale);app.get('/inventory', routes.inventory);app.get('/printreceipt/:receiptId', routes.printreceipt);app.get('/printlabels/:receiptId', routes.printlabels);app.get('/databases', routes.databases);app.post('/databaseReg', routes.databaseReg);app.get('/*', routes.company);app.post('/*', routes.postcompany);app.listen();