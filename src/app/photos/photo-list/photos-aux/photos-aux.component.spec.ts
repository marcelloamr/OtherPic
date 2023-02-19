import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosAuxComponent } from './photos-aux.component';

describe('PhotosAuxComponent', () => {
  let component: PhotosAuxComponent;
  let fixture: ComponentFixture<PhotosAuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosAuxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosAuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
