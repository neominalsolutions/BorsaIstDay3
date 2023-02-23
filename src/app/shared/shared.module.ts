import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyLabelComponent } from './components/my-label/my-label.component';
import { HighLightColorDirective } from './directives/high-light-color.directive';
import { DoubleDotPipe } from './pipes/double-dot.pipe';
import AuthenticatedGuard from './guards/authenticated.guard';

// declarations içinde pipe,directive,component

@NgModule({
  declarations: [MyLabelComponent, HighLightColorDirective, DoubleDotPipe],
  imports: [CommonModule],
  exports: [MyLabelComponent, HighLightColorDirective, DoubleDotPipe],
})
export class SharedModule {}
