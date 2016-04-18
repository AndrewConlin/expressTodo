## Hello world setup
create project folder
enter folder, and run an npm init (creates the package.json)
create a file called app.js
create a folder called app_server(this is where mvc pattern lives)
create a folder public for all your static content
under app_server create 4 sub folders controllers/modules/routes/views
under views create a folder layouts
  - views is where you store all of the partial handlebars files
  - layouts are for the general html layouts you use.
run npm install on any packages you will need
in app.js:
  - require express (must instal first)
  - set app = express();
  - set the loctaion of the views folder, this is differnt because we are using mustache not jade.
  - set handlebars to be your default templating engine.
  - write custom 404/500 routes
  - use app.listen to set up port 3000
