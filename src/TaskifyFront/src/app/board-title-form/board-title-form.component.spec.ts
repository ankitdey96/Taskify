import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardTitleFormComponent } from './board-title-form.component';

describe('BoardTitleFormComponent', () => {
  let component: BoardTitleFormComponent;
  let fixture: ComponentFixture<BoardTitleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardTitleFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardTitleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
