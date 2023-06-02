import * as Joi from '@hapi/joi';
import { ConfigModuleOptions } from '@nestjs/config';

import config from './config';

export const configModuleOptions: ConfigModuleOptions = {
  envFilePath: '.env',
  load: [config],
  validationSchema: Joi.object({
    API_PORT: Joi.number().required(),
    TYPEORM_USERNAME: Joi.string().required(),
    TYPEORM_HOST: Joi.string().required(),
    TYPEORM_PASSWORD: Joi.string().required(),
    TYPEORM_DATABASE: Joi.string().required(),
    TYPEORM_PORT: Joi.number().required(),
    TYPEORM_ENTITIES: Joi.string().required(),
    TYPEORM_MIGRATIONS: Joi.string().required(),
    TYPEORM_MIGRATIONS_DIR: Joi.string().required(),
    TYPEORM_MIGRATIONS_RUN: Joi.string().required(),
  }),
};
