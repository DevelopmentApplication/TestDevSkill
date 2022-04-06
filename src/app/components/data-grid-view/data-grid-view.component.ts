import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IPhotos } from 'src/app/models/rover.model';

@Component({
  selector: 'app-data-grid-view',
  templateUrl: './data-grid-view.component.html',
  styleUrls: ['./data-grid-view.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate(300, style({ opacity: 0 }))
      ])
    ])
  ]
})

export class DataGridViewComponent implements OnChanges {

  @Input() DATA: IPhotos[] = [];

  dataSource: IPhotos[] = this.DATA;

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = changes.DATA.currentValue;
  }

}
