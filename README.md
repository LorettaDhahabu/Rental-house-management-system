# Rental-House-Mgt

## Table Of Content
* Description

* Ruby version

* System dependencies setup

* Database creation

* Deployment instructions

* Features

* License

# Description
This is an app called Rental-House-Mgt. Rental-House-Mgt was developed to specifically be used by landlords, especially those that do not have caretakers to look over their apartments, to be able to track the details of their apartments, the rooms occupied, see tenant details and able to print rent invoices for their tenants.
<br>
It allows the user to see all their added apartments<br>
It also gives the users a permission to add tenants, remove tenants from their database, creat an invoice and print it.<br>
A user can not access their apartments information, unless registers and logs in.

## Ruby Version
* ruby 2.7.4p191 (2021-07-07 revision a21a3b7d23) [x86_64-linux]
## System Dependencies Local setup
To download the dependencies for the frontend and backend, run:

* bundle install
* npm install --prefix client

You can run the Rails API on localhost:3000 by running:

* rails s

You can run the React app on localhost:4000 by running:

* npm start --prefix client

## Database Creation
### Models
The relationships and assocciations are as follows:

* A User has_one Landlord
* A Landlord has many Apartments
* An Apartment has_many rooms
* A Room has_one Tenant
* A Tenant has_one Payment

If you use a Rails generator to create the models, make sure to use the --no-test-framework flag to avoid overwriting the test files. For example,  e.g rails g apartment --no-test-framework

Add any code needed in the model files to establish the relationships.

Then, run the migrations and seed file:

* rails db:migrate db:seed

## Routes
Make sure to return JSON data in the format specified along with the appropriate HTTP verb.

* GET /apartments  => gets all the restaurants in an array format

* GET /apartments/:id => gets a single or the specified restaurant with its available pizza list

* DELETE /tenants/:id  =>removes the specified tenant from the database.
* GET /tenants  => gets all the tenants in an array format

* GET /rooms  => gets all the rooms in an array format

* GET /payments  => gets all the payments in an array format

* GET /tenants/:id  => gets a single or the specified tenant with its details

* GET /payments/:id  => gets a single or the specified payment with its details

* POST /tenants  => creates a new tenant to the apartment-rooms

* PATCH /tenants => edits tenants data and update the edited data.

  
## Deployment Instructions
To deploy a rails API with a react frontend within it, I followed the following procedure:

* Download the Heroku CLI from;  https://devcenter.heroku.com/articles/heroku-cli. <br>
run this command in the Ubuntu terminal to install;
  * curl https://cli-assets.heroku.com/install.sh | sh <br>
This will let you run commands from your terminal to deploy and interact with your application on Heroku.
* After downloading and installing, log in to Heroku via the CLI in the terminal:

  * heroku login

* Install the latest ruby version; 
  * rvm install 2.7.4 --default

* Next, install Postgres to the root of your machine: 
   * sudo apt update
   * sudo apt install postgresql postgresql-contrib libpq-dev

* run; 
    * heroku stack:set heroku-20

* run;
    * heroku create (app name)

* run;
    * bundle lock --add-platform x86_64-linux <br> =>
This will add the platform to your Gemfile.lock

* Make a Procfile for Heroku at the root directory with the following code:

    * web: bundle exec rails s
    * release: bin/rake db:migrate

### Deployment

* At the root directory, run this code:

    * bundle install
$ rails db:create db:migrate db:seed
    * npm install --prefix client

    * npm run build --prefix client
* Then move all the static pages to the public folder of the root directory as follows:

     * mv client/build/* public


* Now go back to your terminal and run the following code to set buildpacks and create a remote repository:

     * heroku buildpacks:add heroku/nodejs --index 1
     * heroku buildpacks:add heroku/ruby --index 2

* lastily;
    * git add .
    * git commit
    * git push heroku master

## Deployed Link
### frontend
https://rental-house-mgt.herokuapp.com/
### backend
https://rental-house-mgt.herokuapp.com/api/apartments
## Features
A user will be able to: 
1. See all the apartments belonging to them
2. Render/Display a list of tenants.
3. add tenants to each apartment
4. Delete a specific tenant together with its associated data when they vacate from the apartment.


## Requirements
* Access to a computing device
* Internet access
## Installation process
* Clone to my repo : git clone https://github.com/LorettaDhahabu/Rental-house-management-system

## Technology Used
* I used HTML for laying out the structure of the app
* The Boostrap, Material UI, CSS was used to style the web pages
* React was used to create interactive UI. Design simple views for each state in my application, and efficiently update and render just the right components when my data changes.
* rubyon rails for backend

## License 
### MIT License

Copyright (c) [2022] [Loretta Dhahabu Jefwa]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Author Loretta-Dhahabu : https://github.com/loretta-dhahabu

Releases
No releases published

Packages
No packages published

Languages used
html
css/boostrap/material ui
Ruby on Rails
React JS




