import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Word!';

  }
  beyWord(): string {
      return "Adios mundo cruel"
  }
  
}


