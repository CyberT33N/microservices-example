'use strict'

const AIO = require('../services/weather-aio');

      const controller = {

         weatheraio: async function(body) { return await AIO.find(body); }

      };


module.exports = controller;
