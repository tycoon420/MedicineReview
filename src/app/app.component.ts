import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { MedStoreService } from './services/med-store.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [MedStoreService]
})
export class AppComponent { }