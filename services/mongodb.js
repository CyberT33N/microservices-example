'use strict'


         const fs = require('fs'),
      json_config = JSON.parse(  fs.readFileSync('./admin/config.json', 'utf8')  ),
              log = require('fancy-log'),
   chalkAnimation = require('chalk-animation'),
         gradient = require('gradient-string'),
            chalk = require('chalk'),
      MongoClient = require('mongodb').MongoClient,
           assert = require('assert'),
         ObjectId = require('mongodb').ObjectId,
   MongoDB_DB_URL = json_config.MongoDB_DB_URL,
  MongoDB_DB_NAME = json_config.MongoDB_DB_NAME;
  var MongoDB, client;










log( 'MongoDB_DB_URL: ' + MongoDB_DB_URL );
MongoClient.connect(MongoDB_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, function(e, client) {
console.log( gradient('white', 'black')('\n\n=======================================\n\n') );

   if(e){
     log( chalk.red.bold('❌ ERROR') + ' Error while try to connect to MongoDB Database - ' + chalk.white.bold('error:\n') + e );
     //assert.equal(null, e);
     return;
   } //   if(e){

     log( 'MongoDB - Connected successfully to server..' );
     MongoDB = client.db( MongoDB_DB_NAME );

});





















const mongodb = {

      auth: async function(token) { return await authCheck(token); }

};

module.exports = mongodb;


























async function authCheck(token){
log('We will check now if the auth token is correct.. token: ' + token);

    const collection = MongoDB.collection('auth');

    const verify = await collection.find( {"token": token} ).toArray({});
    log( 'Auth Check - verify:' + JSON.stringify(verify, null, 4) );
    if(verify[0]) return true;

};
