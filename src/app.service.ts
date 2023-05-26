import { Injectable } from '@nestjs/common';
import internal from 'stream';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getTeste(data): string {
    console.log(data['nome'])
    
    let name = data['nome']
    let valor = data['valor']
    if( name == 'janela' && valor == '250' ){
      return "1";
    }
    return "0"; 
  }
}
