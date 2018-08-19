import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastlogin'
})
export class LastloginPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
