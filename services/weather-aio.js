'use strict'


const fetch = require('node-fetch');

        const API = {

          find: async function(body) {

              const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${body.lat}&exclude=${body.exclude}&lon=${body.lon}&appid=${body.appid}`);
              const json = await response.json();
              //console.log( 'json:' +  JSON.stringify(json, null, 4));
              return json;

          }


        };

module.exports = API;
