import { NgModule } from '@angular/core';
import {
    MdButtonModule,
    MdToolbarModule,
    MdTabsModule,
    MdCardModule,
    MdProgressBarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        MdButtonModule,
        MdToolbarModule,
        MdTabsModule,
        MdCardModule,
        MdProgressBarModule,
        BrowserAnimationsModule
    ],
    exports: [
        MdButtonModule,
        MdToolbarModule,
        MdTabsModule,
        MdCardModule,
        MdProgressBarModule,
        BrowserAnimationsModule
    ],
})
export class MaterialModule { }