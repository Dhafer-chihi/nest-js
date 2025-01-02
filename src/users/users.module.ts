import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './conrollers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { ExempleMiddleware } from './middlewares/exemple/exemple.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ExempleMiddleware).forRoutes({
      path : 'users' , 
      method : RequestMethod.GET
    })
  }
}
