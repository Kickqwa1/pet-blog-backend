import { Controller, Post, Body } from '@nestjs/common';
import { RegistrationService } from '../services/registration.service';
import { RegistrationRequestDto } from '../dto/registration-request.dto';

@Controller('registration')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Post()
  registration(@Body() registrationRequestDto: RegistrationRequestDto) {
    this.registrationService.registration(registrationRequestDto);
  }
}
