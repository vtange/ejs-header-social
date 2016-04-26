module.exports = function(input_app,input_session,passport){
// server.js
// set up ======================================================================
// get all the tools we need
var app      = input_app;
var session = input_session;

// routes ======================================================================
require('./app/acct-manage/socialMedia.js')(app, passport); // load social media linking
// no launch, this just connects stuff ======================================================================
};