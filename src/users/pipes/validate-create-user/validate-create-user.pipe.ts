import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('Inside Validation create user pipe');
    console.log(value);
    console.log(metadata);
  
    
    return value;
  }
}
