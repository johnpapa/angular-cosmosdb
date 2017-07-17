# Angular Cosmos DB

by [John Papa](http://twitter.com/john_papa)

You can [watch me build the app as part of my series here](https://johnpapa.net/angular-cosmosdb-1/)

## Requirements

1. Install the Angular CLI

    ```bash
    npm install -g @angular/cli
    ```

1. Install the [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)

## Getting Started

1. Clone this repository

    ```bash
    git clone https://github.com/johnpapa/angular-cosmos.git
    cd angular-cosmosdb
    ```

1. Install the npm packages

    ```bash
    npm i
    ```

1. Configure Cosmos DB server settings

    Rename the `example-environment.js` file to `environment.js` in the `server/env/` folder and update it with your Cosmos DB settings. Replace the database name key, and port with your specific configuration.

    ```javascript
    // server/env/environment.js
    const cosmosPort = 1234; // replace with your port
    const dbName = 'your-cosmos-db-name-goes-here';
    const key = 'your-key-goes-here';

    module.exports = {
      cosmosPort,
      dbName,
      key
    };
    ```

## Running the app

1. Build the Angular app

    ```bash
    ng build
    ```

1. Launch the server

    ```bash
    node src/server/index.js
    ```

3. Open the browser to http://localhost:3000

## Problems or Suggestions

[Open an issue here](https://github.com/johnpapa/angular-cosmos/issues)
