import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core'
import {optionValue, updateList} from '../../models/options.model'

@Component({
  selector: 'app-list-options',
  templateUrl: './list-options.component.html',
  styleUrls: ['./list-options.component.sass']
})
export class ListOptionsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() list: optionValue[] = [{ id: 0, label: '', checked: false }]
  @Output() updateList = new EventEmitter<updateList>()
  renderList: optionValue[] = [{ id: 0, label: '', checked: false }]

  onChangeCheck = (value: updateList) => {
    this.updateList.emit(value)
  }

  ngOnChanges(changes: SimpleChanges) {
    this.renderList = changes['list'].currentValue
  }
}
