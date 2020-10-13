import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pony-image',
  templateUrl: './pony-image.component.html',
  styleUrls: ['./pony-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PonyImageComponent implements OnInit {

  @Input() src: string;

  constructor() { }

  ngOnInit(): void {
  }

  public check() {
    console.log('pony image component view checked');
  }

}
