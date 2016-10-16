# Personal Website


App Structure:

	app/
	----- shared/   	// Acts as reusable components or partials of the site
	----- components/   // Each component is treated as a mini Angular app
	----- app.module.js // Creates the main module and runs on startup
	----- app.routes.js // Provides routes to all views and links controllers
	assets/
	----- img/      	// Images and icons for the app
	----- css/      	// All styles and style related files
	----- js/       	// JavaScript files written for the app that are not for angular
	----- libs/     	// Third-party libraries
	index.html


Required Software:

	1. Google Chrome
	2. Git
	2. Node.js


Command Line Installations:

	npm install -g firebase-tools


To Run Locally:

	1. Open your command prompt to the Fresas-Frescas directory and run: firebase serve
	2. Open Chrome and go to the URL: localhost:5000
	3. Right-click on the webpage and click "Inspect Element" to open Chome DevTools
  	4. Click "Network" in the toolbar and check the "Disable cache" checkbox


Useful Docs:

	1. https://github.com/firebase/angularfire/blob/master/docs/reference.md
