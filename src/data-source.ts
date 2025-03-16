import { DataSource } from 'typeorm';

import { join } from 'path';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: 'postgres://postgres:password@localhost:5432/nestjs_crud',
  entities: [join(process.cwd(), 'src/**/*.entity{.ts,.js}')],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
  logging: true,
});
