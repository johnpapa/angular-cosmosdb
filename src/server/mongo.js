const env = require('./env/environment');

// eslint-disable-next-line max-len
const mongoUri = `mongodb://${env.dbName}:${env.key}@${env.dbName}.documents.azure.com:${env.cosmosPort}/?ssl=true`; //&replicaSet=globaldb`;

const mongoose = require('mongoose');

function connect() {
  return mongoose.connect(mongoUri, { useMongoClient: true });
}

module.exports = {
  connect
};
