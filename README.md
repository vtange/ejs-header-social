# basic-login-bar

An EJS header template with login, signup, social media and forgot email functions

This module extends your Express app with routes and templates needed to quickly add login functionality to your app.

 - requires EJS
 - requires you use Passport.JS and Express Session
 
 How to use:
 
 ```
 npm install --save basic-login-bar
 ```
 In your server.js or app.js:
 ```
app.use(session({ secret: 'blah' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.set('view engine', 'ejs'); 
app.use(express.static(__dirname + '/public'));
app.use('/users', express.static(__dirname + '/public'));

require('basic-login-bar')(app,session,passport);
 ```
 In your own templates
 ```
<%- include ../node_modules/basic-login-bar/views/partials/header.ejs %>
 ```
 
 The .ejs partial for the header requires a 'title' property inputed from all your server routes. This autogenerates the title shown on the header. For example:
 
 ```
 		res.render('index.ejs', {
			title : app.title,
 ```
 You can define ```app.title``` in ```server.js/index.js``` or in ```package.json``` and require it.
 
 You can find example boilerplate code for a project using this module at 
 https://github.com/vtange/Boilerplates/tree/master/site-w-logins-header
 
