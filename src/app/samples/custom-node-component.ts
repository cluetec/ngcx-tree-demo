import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgcxCustomComponent, NgcxTreeNodeWrapper } from '@cluetec/ngcx-tree';

@Component({
  selector: 'app-custom-component',
  template: `<strong>{{ nodeWrapper.data.title }}</strong>
    <i>(id:{{ nodeWrapper.id }}, next:{{ nodeWrapper.next?.id ?? 'none' }})</i>
    <button (click)="sampleClicked()">sample button</button> `,
})
export class CustomNodeComponent implements NgcxCustomComponent<any> {
  @Input()
  nodeWrapper!: NgcxTreeNodeWrapper<any>;
  @Output()
  customEvent = new EventEmitter<any>();

  sampleClicked() {
    this.customEvent.emit('sample button clicked ' + this.nodeWrapper?.id);
  }
}
