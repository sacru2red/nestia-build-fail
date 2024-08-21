import type nestia from '@nestia/sdk';

export const NESTIA_CONFIG = {
  input: {
    include: ['./src/**/*.controller.ts'],
  },
  output: './src/api',
  swagger: {
    output: './swagger/swagger.json',
    security: {
      bearer: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
} satisfies nestia.INestiaConfig;
export default NESTIA_CONFIG;
