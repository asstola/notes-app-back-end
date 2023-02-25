/* eslint-disable indent */
/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable import/no-extraneous-dependencies */
const Hapi = require('@hapi/hapi');
const routes = require('./routes');
 
const init = async () => {
  const server = Hapi.server({
    port: 8000,
    host: 'localhost',
    routes: {
        cors: {
            origin: ['*'],
        },
    },
  });
 
 server.route(routes);
 
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
 
 
init();