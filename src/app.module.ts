import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistrationModule } from './registration/registration.module';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';

import configuration from './config/configuration';

@Module({
  imports: [
    RegistrationModule,
    UserModule,
    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule.forRoot({
          load: [configuration],
        }),
      ],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('db.postgres.host'),
        port: +configService.get('db.postgres.port'),
        username: configService.get('db.postgres.username'),
        password: configService.get('db.postgres.password'),
        database: configService.get('db.postgres.database'),
        entities: [User],
        synchronize: true,
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
