import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgcxTreeComponent } from '@cluetec/ngcx-tree';
import { AppComponent } from './app.component';
import { NgcxTreeSampleViewerComponent } from './ngcx-tree-sample-viewer/ngcx-tree-sample-viewer.component';
import { PrintMethodsPipe } from './print-methods.pipe';
import { CustomNodeComponent } from './samples/custom-node-component';

@NgModule({
  declarations: [
    AppComponent,
    NgcxTreeSampleViewerComponent,
    PrintMethodsPipe,
    CustomNodeComponent,
  ],
  imports: [BrowserModule, NgcxTreeComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
