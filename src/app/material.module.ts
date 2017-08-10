import { NgModule } from '@angular/core';
import { MdButtonModule, MdToolbarModule, MdTabsModule, MdCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        MdButtonModule,
        MdToolbarModule,
        MdTabsModule,
        MdCardModule,
        BrowserAnimationsModule
    ],
    exports: [
        MdButtonModule,
        MdToolbarModule,
        MdTabsModule,
        MdCardModule,
        BrowserAnimationsModule
    ],
})
export class MaterialModule { }