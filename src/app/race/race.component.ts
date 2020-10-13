import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RaceComponent implements OnInit {

  ponies = [{ id: 1, color: 'green' }, { id: 2, color: 'blue' }];

  constructor() { }

  ngOnInit() {
  }

  check() {
    console.log('race component view checked');
  }

}
