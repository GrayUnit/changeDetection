import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PonyComponent implements OnInit {

  public color: Observable<string>;

  constructor(private colorService: ColorService) { }

  ngOnInit() {
    this.color  = this.colorService.get();
  }
  check() {
    console.log('pony component view checked');
  }


}
