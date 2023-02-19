import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PhotoComponent } from "./photo/photo.component";
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosAuxComponent } from './photo-list/photos-aux/photos-aux.component';

@NgModule({
    declarations: [
        PhotoComponent,
        PhotoListComponent,
        PhotoFormComponent,
        PhotosAuxComponent,
        PhotoComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule
    ]
})

export class PhotosModule { }