import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Sequelize} from "sequelize";


async function bootstrap() {
  /*
  const sequelize = new Sequelize('test', 'root', '1234', {
    host: 'localhost',
    port:3306,
    dialect: 'mysql'
  });

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }*/
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
