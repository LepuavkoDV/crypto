import { Component, OnInit, Input } from '@angular/core';
import { IData } from '../../types/idata';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data: IData;
  constructor() { }

  ngOnInit(): void {
  }

}
