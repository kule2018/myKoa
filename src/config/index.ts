import * as path from 'path';
import { ConnectionOptions } from 'typeorm';
const { PORT } = process.env;
const locateEntities = name => path.join(__dirname, `../entity/${name}/*`);
const locateDb = name => path.join(__dirname, `../../db/${name}.db`);
export const port = Number(PORT) || 9050;

export const dbConnectionOpts: ConnectionOptions[] = [
  {
    type: 'sqlite',
    name: 'game',
    database: locateDb('game'),
    entities: [locateEntities('game')],
    entityPrefix: 'gm_',
    logging: true
  }
];
