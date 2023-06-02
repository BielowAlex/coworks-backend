import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  const config = await app.get(ConfigService);

  const port = config.get<number>('API_PORT');
  await app.listen(port || 4000, () => {
    console.log(`App started on port ${port || 4000}`);
  });

  app.enableCors();
}
bootstrap();
