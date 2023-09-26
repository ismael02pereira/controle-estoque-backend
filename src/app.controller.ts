import { Controller, Get, Post, Req, Redirect, Query, Res, HttpStatus, Body} from '@nestjs/common';
// import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';
import { AppService } from './app.service';
import { Request } from 'express';
import { HttpCode} from '@nestjs/common';
import { Header } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Response } from 'express';
import { NotFoundError } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('cadastro')
  // @Header('Cache-Control', 'none')
  create(@Body() data: AppService, @Res() res: Response) {

    let obj_cadastro = this.appService.getTeste(data)
    if(obj_cadastro){
      res.status(HttpStatus.CREATED).send({
        status: 1,
        message: 'Created Successfully',
        return: data
      });
    }
    res.status(HttpStatus.NOT_FOUND).send({
      status: 0,
      message: 'Tende mais tarde !'
    });
  }

  @Get('cats')
  findll(@Req() request: Request): string {
    return 'This action returns all cats';
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }

  }
  @Get('cats/:id')
  findAll(@Param('id') id, @Res()  res: Response) {
    res.status(HttpStatus.OK).json({
      message: 'This action returns all cats',
      id: id
    });
  }

}


