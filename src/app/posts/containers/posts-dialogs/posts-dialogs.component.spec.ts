import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsDialogsComponent } from './posts-dialogs.component';

describe('PostsDialogsComponent', () => {
  let component: PostsDialogsComponent;
  let fixture: ComponentFixture<PostsDialogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsDialogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
