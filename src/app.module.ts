import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistrationModule } from './registration/registration.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [RegistrationModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
