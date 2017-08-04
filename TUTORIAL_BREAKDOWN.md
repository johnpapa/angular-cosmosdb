# MEAN app with Cosmos DB

## Create and run the API

We'll create the Angular app and add the Node and Express code to handle API routing.

### Create the app

1. Install the Angular CLI
1. Generate a new Angular app

### Node and Express

1. Install Express, and body parser.
1. Create a new folder and file for `src/server/index.js`, add basic node/express logic
1. Create `src/server/routes.js` copy the routes in
1. Create a `/api/get` route (with hard coded heroes)
1. Create a `/api` route in `src/server/index.js` (link to routes.js)
1. Create a VS Code debug configuration for Node (Press debug, press configure, select Node.js, press green button)
1. Change the launch config's launch program to our node server
1. Press the green arrow to run the node server
1. Open Postman and paste perform a *GET* http request on http://localhost:3000/api/heroes. You should see the following JSON results

## Adding the A in MEAN

### The Heroes UI

1. Add a component to list Heroes. The `--flat` flag adds the component without putting it in its own sub folder.
1. Copy this code into `heroes.component.html`
1. Copy this code into `heroes.component.ts`
1. Copy the styles.scss code
1. Add the hero component's selector to the `app.component.ts`
1. Import Forms and Http modules into the app
1. Create a model for our heroes,  `hero.ts`
1. Add a service to handle http interactions between Angular and Node
1. Copy the code into `hero.service.ts`
1. Build the app
1. Create a VS Code debug configuration for Node, and press the green arrow to run it!
1. Open the browser to http://localhost:3000

## Cosmos DB setup

1. Install the Azure CLI
1. Login to Azure via the CLI
1. Create a logical place for our Azure resources. This is a called a resource group.
1. Create the Cosmos DB account and make sure it is of type MongoDB
1. Check it out in the Portal

### Connecting to Mongo

1. Install the mongoose node package from npm
1. Create `src/server/mongo.js` to handle mongo connections
1. Create the connection environment file `src/server/env/environment.js`
1. Enter the following Azure CLI commands to get the password and connection string. Copy these to your text editor, as we'll need them in a moment.
1. Replace your port, database name, and password/key for Cosmos DB. You can find these in the Azure portal for your Cosmos DB account.
1. Create the Hero model `src/server/hero.model.js`
1. Enter the following code to create the Hero model using a mongoose schema
1. Create a service to handle heroes data using Mongo via Mongoose `src/server/hero.service.js`
1. Modify `src/server/routes.js` to use the new `hero.service.js`
1. Restart the node process in the VS Code debugger.
1. Open Postman and paste perform a *GET* http request on http://localhost:3000/api/heroes. You should see the following JSON results
1. Open the app at http://localhost:3000. You should see the app no longer has any heroes, because we are hitting the new database.

## Create the post, put and delete methods in the node server

### Create the Hero Post

1. In the `src/server/hero.service`, create the post method and the helper functions.
1. In the `src/server/routes.js`, call the post function
1. Restart the node process in the VS Code debugger.
1. Open the app at http://localhost:3000. Add a hero

### Create the PUT and DELETE

1. In the `src/server/hero.service`, create the post method and the helper functions.
1. In the `src/server/routes.js`, call the post function
1. Restart the node process in the VS Code debugger.
1. Open the app at http://localhost:3000. Get, Add, Update, Delete !
