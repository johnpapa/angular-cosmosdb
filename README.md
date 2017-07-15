# Angular Cosmos DB
by [John Papa](http://twitter.com/john_papa)

## Getting Started

1. Clone this repository
```bash
git clone https://github.com/johnpapa/angular-cosmos.git
cd angular-cosmosdb
```

2. Install the npm packages

```bash
npm i
```

3. Configure Cosmos DB server settings

Rename the `example-environment.js` file to `environment.js` in the `server/env/` folder and update it with your Cosmos DB settings. Replace the database name key, and port with your specific configuration.

```javascript
// server/env/environment.js
const dbName = 'your-cosmos-db-name-goes-here';
const key = 'your-key-goes-here';
const cosmosPort = 1234; // replace with your port

module.exports = {
  dbName,
  key,
  cosmosPort
};
```

## Running the app

1. Build the Angular app

```bash
ng build
```

2. Launch the server

```bash
npm start
```

3. Open the browser to http://localhost:3000

## Problems or Suggestions?

[Open an issue here](https://github.com/johnpapa/angular-cosmos/issues)

