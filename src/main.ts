import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Request, Response, NextFunction } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Middleware to log every API request
  app.use((req: Request, res: Response, next: NextFunction) => {
    const start = Date.now();

    res.on('finish', () => {
      const duration = Date.now() - start;
      console.log(
        `[API] ${req.method} ${req.originalUrl} -> ${res.statusCode} (${duration}ms)`,
      );
    });

    next();
  });

  const port = process.env.PORT ?? 3005;
  await app.listen(port);
  console.log('listening to port', port);
}
bootstrap();
