import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'
import {optionValue, updateList} from '../../models/options.model'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-option-card',
  templateUrl: './option-card.component.html',
  styleUrls: ['./option-card.component.sass']
})
export class OptionCardComponent implements OnInit {
  constructor() {}

  @Input() item: optionValue = {
    id: 1,
    label: 'opt',
    checked: false
  }
  @Output() handleCheck = new EventEmitter<updateList>()
  inputCheck = new FormControl(this.item.checked || false)

  onChange = (id: number, isDelete = false) => {
    this.handleCheck.emit({ id, isDelete })
  }

  ngOnInit(): void {}
}
