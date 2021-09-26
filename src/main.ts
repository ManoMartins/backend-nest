import { NestFactory } from '@nestjs/core';
import dotenvFlow = require('dotenv-flow');

import { AppModule } from './app.module';

async function bootstrap() {
  dotenvFlow.config();
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
