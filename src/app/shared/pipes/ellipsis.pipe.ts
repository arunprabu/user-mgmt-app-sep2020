import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: string, ...args: any[]): unknown {
    value = value.substr(0, args[0]);
    return value + '...';
  }

  
}
