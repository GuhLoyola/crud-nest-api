import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
  .setTitle('CRUD Api')
  .setVersion('1.0.0')
  .setDescription('CRUD api related to courses and users')
  .build()

  const document = SwaggerModule.createDocument(app, options)

  SwaggerModule.setup('docs', app, document)

  app.enableCors();
  await app.listen(3000);
}
bootstrap();