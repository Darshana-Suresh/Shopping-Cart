# shopping-cart
Yeoman application in angularjs

Yeoman
 https://www.sitepoint.com/kickstart-your-angularjs-development-with-yeoman-grunt-and-bower/

1. npm install -g yo grunt-cli bower	//install yeoman,grunt,bower
2. npm install -g generator-angular	//creates basic folders,configs, and files to get the app running
3. mkdir app && cd app			//project directory
4. yo angular 				//setting up configs
5. index.html : main code
	bower_components : all packages installed with bower are kept; angular packages
	scripts : js code
	/app/scripts/app.js : has the routes
	/app/scripts/controllers/main.js	
	/app/views/main.html	:includes angularjs, angularjs resource, and the scripts(controllers)
6. grunt serve
7. npm install karma grunt-karma karma-jasmine karma-chrome-launcher --save-dev
	save dev to save the package (in package.json) for dev purpose
8. test/spec/controllers/main.js :unit tests with jasmine
9. grunt test
