import { createConnections } from 'typeorm';
import * as Koa from 'koa';
import * as koabody from 'koa-body';
import { router } from './router';
import { dbConnectionOpts, port } from './config';

export const createApp = () => {
  const app = new Koa();

  app.use(koabody({ multipart: true }));
  app.use(router.routes());
  app.listen(port);

  console.log(
    `Koa application is up and running on port http://localhost:${port}`
  );
};

createConnections()
  .then(createApp)
  .catch(error => console.log('TypeORM connection error: ', error));
