import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'printMethods',
})
export class PrintMethodsPipe implements PipeTransform {
  transform(value: any): string {
    return this.printJson(this.printMethods(value));
  }

  printMethods(value: any) {
    let result = value;
    if (typeof value == 'function') {
      if (value.name) {
        result = value.name;
      } else {
        result = value.toString();
      }
    } else if (
      value &&
      typeof value == 'object' &&
      Object.keys(value).indexOf('elementRef') >= 0
    ) {
      result = 'treeNodeTemplate';
    } else if (value && typeof value == 'object') {
      result = {};
      Object.keys(value).forEach(
        (key) => (result[key] = this.printMethods(value[key]))
      );
    }
    return result;
  }

  printJson(value: any, layer: number = 0): string {
    if (value === undefined) {
      return '';
    }
    let result = '';
    if (typeof value == 'object') {
      result += ' '.repeat(layer * 2) + '{\n';
      Object.keys(value).forEach(
        (key) =>
          (result +=
            ' '.repeat((layer + 1) * 2) +
            key +
            ': ' +
            this.printJson(value[key], layer + 1) +
            ',\n')
      );
      result += ' '.repeat(layer * 2) + '}';
    } else {
      result += value;
    }
    return result;
  }
}
