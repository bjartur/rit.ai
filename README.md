rit.ai
======

### Requirements
[https://bower.io/] (Bower)

[https://www.npmjs.com/] (npm || yarn)

[https://gulpjs.com/] (gulp)

[https://github.com/purescript-contrib/pulp](Pulp)

### Installation

bower install && (npm || yarn) install 

### Running the server

pulp build && pulp run -m Server


Should display:

    * Build successful.
    Listening on 8080

### Using gulp

Gulp is used for processing stylus stylesheets and converting them to plain css. You can watch *.styl files within static/stylus by running

    gulp

or simply

    gulp stylus

to run the task once

### Structure

Purescript code is located within /src. 

Static files are located within /static
