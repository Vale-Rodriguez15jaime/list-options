import { Component, OnInit, ChangeDetectorRef } from '@angular/core'
import { optionValue, updateList } from '../../models/options.model'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  constructor(private changeDetection: ChangeDetectorRef) {}
  ngOnInit(): void {}
  listOptions: optionValue[] = [
    { id: 1, label: 'Option-check-box 1', checked: true },
    { id: 2, label: 'Option-check-box 2', checked: false },
    { id: 3, label: 'Option-check-box 3', checked: false },
    { id: 4, label: 'Option-check-box 4', checked: false },
    { id: 5, label: 'Option-check-box 5', checked: false },
    { id: 6, label: 'Option-check-box 6', checked: false }
  ]
  listSelected: optionValue[] = this.listOptions.filter((item: optionValue) => item.checked)
  valueInput = new FormControl('')

  textInput: string | null = null

  addNewOption = () => {
    const newValue = [
      ...this.listOptions,
      {
        id: this.listOptions.length + 1,
        label: this.textInput || `Name default ${this.listOptions.length + 1}`,
        checked: true
      }
    ]
    this.listOptions = newValue
    this.listSelected = newValue.filter((item: optionValue) => item.checked)
    this.valueInput.setValue('')
    this.changeDetection.detectChanges()
  }

  handleChangeList = (data: updateList) => {
    const newList = data.isDelete
      ? this.listOptions.filter(item => item.id !== data.id)
      : this.listOptions.map(item => {
          if (item.id === data.id) {
            return { ...item, checked: !item.checked }
          }
          return { ...item }
        })
    this.listOptions = newList
    this.listSelected = newList.filter((item: optionValue) => item.checked)
    this.changeDetection.detectChanges()
  }
}
