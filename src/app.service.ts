import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hammasi sizlar uchun n15 😂';
  }
}
