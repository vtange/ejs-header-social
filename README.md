# ejs-header-social

An EJS header template with login, signup, social media and forgot email functions

This module extends your Express app with routes and templates needed to quickly add login via social media (Facebook, Twitter, Google) functionality to your app.
#### Recommended: Use this with ejs-header

 - requires EJS
 - requires you use Passport.JS and Express Session
 
 How to use:
 
 ```
 npm install --save ejs-header-social
 ```
 In your server.js or app.js:
 
 ```
app.use('/users', express.static(__dirname + '/public'));
require('ejs-header-social')(app,session,passport);
```

### You can generate a project using Slush using this header with https://github.com/vtange/slush-ejs-social
 
