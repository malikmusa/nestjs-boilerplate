import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DatabaseService } from './core/database/database.service';
import * as cookieParser from 'cookie-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /* Swagger */
  const config = new DocumentBuilder()
    .setTitle('Boilerplate-NestJs')
    .setDescription('API documentation for Boilerplate-NestJs.')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  /* Prisma */
  const prismaService: DatabaseService = app.get(DatabaseService);
  prismaService.enableShutdownHooks(app);

  /* Cookies */
  app.use(cookieParser());
  await app.listen(1997);
}
bootstrap();
