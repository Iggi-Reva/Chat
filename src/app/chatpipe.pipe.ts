import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chatpipe'
})
export class ChatpipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
