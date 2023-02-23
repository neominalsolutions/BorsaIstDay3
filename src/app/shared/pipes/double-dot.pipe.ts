import { Pipe, PipeTransform } from '@angular/core';

// label önüne : işareti konsun diye yapılan bir geliştirme.
// OrderShipped:1, OrderCompleted:2, OrderSubmitted:3 apida order-status:3
// apiden 3 olarak çektiğiniz değeri ekranda OrderSubmitted olarak göstermek için bir pipe yazabiliriz.
// {{order.order-status | orderStatus}} => OrderSubmitted
// htmlde kullanırken | işareti ile bunu yapıyoruz.

@Pipe({
  name: 'doubleDot',
})
export class DoubleDotPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    if (!value.includes(':')) return `${value} :`;

    return value;
  }
}
