import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1742137613196 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "users" (
              "id" BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
              "name" TEXT NOT NULL,
              "email" TEXT NOT NULL,
              "age" INT NOT NULL,
              CONSTRAINT unique_email UNIQUE ("email")
            )
          `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
