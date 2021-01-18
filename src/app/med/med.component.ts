import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Med } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'br-med',
  templateUrl: 'med.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class MedComponent {
  @Input() med: Med;
  @Output() rated: EventEmitter<Med> = new EventEmitter<Med>();
  @Output() deleted: EventEmitter<Med> = new EventEmitter<Med>();

  rateUp() {
    this.med.rateUp();
    this.rated.emit(this.med);  
  }

  rateDown() {
    this.med.rateDown();
    this.rated.emit(this.med);
  }

  delete() {
     this.deleted.emit(this.med);
  }
}