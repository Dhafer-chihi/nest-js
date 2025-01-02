import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExempleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next:NextFunction) {
    console.log('Exemple Middleware');
    console.log(req.headers.authorization);
    const {authorization} = req.headers 

    
    
    next();
  }
}
