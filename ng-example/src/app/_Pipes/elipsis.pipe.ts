import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myElipsis'
})

export class ElipsisPipe implements PipeTransform {
    transform(value: string, args: number): string {
        if (args === undefined) {
            return value;
        }

        if (value.length > args) {
            const myData = value.substring(0, args) + ' ...';
            return myData;
        } else {
            return value;
        }
    }
}
