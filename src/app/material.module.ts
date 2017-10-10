import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        BrowserAnimationsModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatListModule,
        MatCardModule,
        BrowserAnimationsModule
    ],
})
export class MaterialModule { }