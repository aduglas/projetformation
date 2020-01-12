import { BackformationApplication } from './application';
import { ApplicationConfig } from '@loopback/core';
import { ExpressServer } from './server';

export { BackformationApplication };

export async function main(options: ApplicationConfig = {}) {
  
  const server = new ExpressServer(options);
  await server.boot();
  await server.start();
  console.log('Server is running at http://127.0.0.1:3000');

}
