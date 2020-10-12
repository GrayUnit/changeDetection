import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {

  @Input() person: Person;

  check(){
    console.log('check')
  }

}
