import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

// directive yapılarını html elementlere özellik kazandırmak amaçlı kullanırız.
// renderer2 denilen elementin JS API eriştiğimiz bir service
// elementin doma nasıl basılacağı ile ilgilenir.
// elementRef ile de element referansına erişebiliriz.

@Directive({
  selector: '[appHighLightColor]',
})
export class HighLightColorDirective implements OnInit {
  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    // ilk yüklemede elementi bold olarak tanımladık
    this.renderer.setStyle(this.el.nativeElement, 'font-size', 'bold');
  }

  // elemente mouse over özelliği kazandırdık
  @HostListener('mouseover', ['$event'])
  OnMouseOver(event: any) {
    console.log('mouse-over', event);
    this.el.nativeElement.title = 'Mouse üzerinde';
  }
}
