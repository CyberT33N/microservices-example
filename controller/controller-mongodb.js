'use strict'


const mongodb = require('../services/mongodb');

const controller = {

   auth: async function(token) { return await mongodb.auth(token); }

}; // let controllers = {

module.exports = controller;
