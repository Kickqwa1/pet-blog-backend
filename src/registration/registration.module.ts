import { Module } from '@nestjs/common';
import { RegistrationService } from './services/registration.service';
import { RegistrationController } from './controllers/registration.controller';

@Module({
  controllers: [RegistrationController],
  providers: [RegistrationService],
})
export class RegistrationModule {}
