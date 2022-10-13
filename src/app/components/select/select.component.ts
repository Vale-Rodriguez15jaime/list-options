import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import { optionValue } from "../../models/options.model";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass']
})
export class SelectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() list: optionValue[] = [{ id: 0, label: '', checked: false }]
  newList = [{ id: 0, label: '', checked: false }]

  ngOnChanges(changes: SimpleChanges) {
    this.newList = changes['list'].currentValue
  }

}
