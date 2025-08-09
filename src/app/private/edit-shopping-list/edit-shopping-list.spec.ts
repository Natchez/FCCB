import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShoppingList } from './edit-shopping-list';

describe('EditShoppingList', () => {
  let component: EditShoppingList;
  let fixture: ComponentFixture<EditShoppingList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditShoppingList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditShoppingList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
