const mongoose = require('mongoose');
/**
 * Set to Node.js native promises
 * Per http://mongoosejs.com/docs/promises.html
 */
mongoose.Promise = global.Promise;

const env = require('./env/environment');

// eslint-disable-next-line max-len
const mongoUri = `mongodb://${env.dbName}:${env.key}@${env.dbName}.documents.azure.com:${env.cosmosPort}/?ssl=true`; //&replicaSet=globaldb`;

function connect() {
  return mongoose.connect(mongoUri, { useMongoClient: true });
}

module.exports = {
  connect
};
