'use strict'



/*
███████████████████████████████████████████████████████████████████████████████
██******************** PRESENTED BY t33n Software ***************************██
██                                                                           ██
██                  ████████╗██████╗ ██████╗ ███╗   ██╗                      ██
██                  ╚══██╔══╝╚════██╗╚════██╗████╗  ██║                      ██
██                     ██║    █████╔╝ █████╔╝██╔██╗ ██║                      ██
██                     ██║    ╚═══██╗ ╚═══██╗██║╚██╗██║                      ██
██                     ██║   ██████╔╝██████╔╝██║ ╚████║                      ██
██                     ╚═╝   ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝                      ██
██                                                                           ██
███████████████████████████████████████████████████████████████████████████████

*/






/*
████████████████████████████████████████████████████████████████████████████████
.__                              __           .__               .__
|__| _____ ______   ____________/  |_  ______ |  |  __ __  ____ |__| ____   ______
|  |/     \\____ \ /  _ \_  __ \   __\ \____ \|  | |  |  \/ ___\|  |/    \ /  ___/
|  |  Y Y  \  |_> >  <_> )  | \/|  |   |  |_> >  |_|  |  / /_/  >  |   |  \\___ \
|__|__|_|  /   __/ \____/|__|   |__|   |   __/|____/____/\___  /|__|___|  /____  >
         \/|__|                        |__|             /_____/         \/     \/
npm i express body-parser express-rate-limit connect-timeout chalk-animation gradient-string chalk fancy-log mongodb assert
*/

    const express = require('express'),
              app = express(),
       bodyParser = require('body-parser'),
           router = express.Router(),
             port = process.env.PORT || 1337,
        rateLimit = require('express-rate-limit'),
          timeout = require('connect-timeout'),


       controller = require('./controller/controller'),
controllermongodb = require('./controller/controller-mongodb'),





              os = require('os'),
          osHOME = os.homedir(),
      osPLATFORM = os.platform(),

  chalkAnimation = require('chalk-animation'),
        gradient = require('gradient-string'),
           chalk = require('chalk'),

              fs = require('fs'),
             log = require('fancy-log'),
          {exec} = require('child_process'),



     json_config = JSON.parse(  fs.readFileSync('./admin/config.json', 'utf8')  ),

           limit = json_config.request_limit;


































                           // ADVERTISE
                           var ads = gradient('red', 'white').multiline([
                                  '',
                                  'Presented by',
                                  '████████╗██████╗ ██████╗ ███╗   ██╗',
                                  '╚══██╔══╝╚════██╗╚════██╗████╗  ██║',
                                  '   ██║    █████╔╝ █████╔╝██╔██╗ ██║',
                                  '   ██║    ╚═══██╗ ╚═══██╗██║╚██╗██║',
                                  '   ██║   ██████╔╝██████╔╝██║ ╚████║',
                                  '   ╚═╝   ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝ Software'
                           ].join('\n'));
                           console.log(ads);
                           console.log( '\nCheck my Github Profile: ' + chalk.white.bgGreen.bold(' github.com/CyberT33N ')  + '\n\n');
                           console.log( gradient('white', 'black')('\n\n=======================================\n\n') );


                               /*
                               -----------------------------------------------------------------------------

                               ███████╗████████╗ █████╗ ██████╗ ████████╗    ███████╗ ██████╗██████╗ ██╗██████╗ ████████╗
                               ██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚══██╔══╝    ██╔════╝██╔════╝██╔══██╗██║██╔══██╗╚══██╔══╝
                               ███████╗   ██║   ███████║██████╔╝   ██║       ███████╗██║     ██████╔╝██║██████╔╝   ██║
                               ╚════██║   ██║   ██╔══██║██╔══██╗   ██║       ╚════██║██║     ██╔══██╗██║██╔═══╝    ██║
                               ███████║   ██║   ██║  ██║██║  ██║   ██║       ███████║╚██████╗██║  ██║██║██║        ██║
                               ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝       ╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝
                               */

                               log( 'Current working directory: ' + __dirname );























// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);
log( 'rate limit value: ' + limit );
const apiLimiter = rateLimit({
  windowMs: limit,
  message: "Too many POST requests created from this IP, please try again in " + limit + "ms",
  max: 1 //<-- max limit
});




// parse application/json
app.use(bodyParser.json());





app.post('/weatheraio', apiLimiter, function(req, res){(async () => {


  if (!req.is('application/json')) {
      let e = 'As it seems the POST request doesnt contain a valid JSON.. We cancel the request now..';
      log( e );
      res.send(e);
      return;
   } //   if (!req.is('application/json')) {
   log( 'POST request JSON: '  + JSON.stringify(req.body, null, 4)  );











                // check if token is valid
               if( !await controllermongodb.auth(req.headers['authorization']) ){
                   let e = 'Error while try to verify auth token..Maybe wrong token?';
                   log( e );
                   res.send( e );
                   return;
               } //   if( !success ){
               log( 'Auth token was verified successfully..' );










              log( `lat: ${req.body.lat} - lon: ${req.body.lon} - appid: ${req.body.appid} - exclude: ${req.body.exclude}` );
              if ( req.body.lat && req.body.lon && req.body.appid ) var weatherAIO = await controller.weatheraio(req.body);
              else{
                let e = 'Some parameters are missing.. Make sure that your request includes lat, lon & appid';
                log( e );
                res.send( e );
                return;
              }







              if( weatherAIO ) {

                  log( 'Successfully get weatherAIO: ' + JSON.stringify(weatherAIO, null, 4) );
                  res.send( weatherAIO );

              } // if( weatherAIO ) {
              else{

                  let e = 'Something went wrong with the API call..';
                  log( e );
                  res.send( e );

              } // else from if( weatherAIO ) {







})().catch((e) => {  log('ASYNC - Error at weatheraio route: ' + e)  })}); // app.post('/weatheraio', apiLimiter, function(req, res){(async () => {











app.listen(port, () => {
  log('Server was started.. Listening on: ' + process.env.IP + ':' + port);
});
