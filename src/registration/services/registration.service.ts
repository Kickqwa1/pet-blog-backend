import { Injectable } from '@nestjs/common';
import { RegistrationRequestDto } from '../dto/registration-request.dto';

@Injectable()
export class RegistrationService {
  registration(registrationRequestDto: RegistrationRequestDto) {
    return registrationRequestDto;
  }
}
