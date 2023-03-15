export function AdMobClient():void{

  const express = require('express');
  const app = express();
  const { auth } = require('express-oauth2-jwt-bearer');
  
  const port = process.env.PORT || 8080;
  
  const jwtCheck = auth({
    audience: 'https://angular-tju8dw.stackblitz.io',
    issuerBaseURL: 'https://poligonos-app.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });
  
  // enforce on all endpoints
  app.use(jwtCheck);
  
  app.get('/authorized', function (req, res) {
      res.send('Secured Resource');
  });
  
  app.listen(port);
  
  console.log('Running on port ', port);

} // end AdMobClient function