// path: ./config/env/production/database.ts

import { parse } from 'pg-connection-string';
const config = parse(process.env.DATABASE_URL);

export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST'),
      port: env('DATABASE_PORT'),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});