import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

// shared module altında genelde default component yerine pure component tercih edilir. bir çok sayfada referans edilecekleri için check dirty işleminden bu componentlerin etkilenmemesi için yapılır.

@Component({
  selector: 'app-my-label',
  templateUrl: './my-label.component.html',
  styleUrls: ['./my-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyLabelComponent {
  @Input() text: string = 'label';
}
