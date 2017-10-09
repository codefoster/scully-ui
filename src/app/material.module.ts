import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatProgressBarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatTabsModule,
        MatCardModule,
        MatProgressBarModule,
        BrowserAnimationsModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatTabsModule,
        MatCardModule,
        MatProgressBarModule,
        BrowserAnimationsModule
    ],
})
export class MaterialModule { }