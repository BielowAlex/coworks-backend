import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configModuleOptions } from './config/module-options';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(configModuleOptions),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('db.host'),
        username: config.get<string>('db.user'),
        password: config.get<string>('db.pass'),
        database: config.get<string>('db.name'),
        port: config.get<number>('db.port'),
        entities: [__dirname + 'dist/**/*.entity.{ts,js}'],
        autoLoadEntities: true,
        synchronize: false,
        logging: true,
      }),
    }),
  ],
})
export class SharedModule {}
