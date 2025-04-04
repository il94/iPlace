import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.useGlobalPipes(new ValidationPipe({ stopAtFirstError: true }))

	app.use(cookieParser())
	app.enableCors({
		credentials: true,
		origin: true,	
	})

	await app.listen(process.env.PORT || 3333)
}
bootstrap()