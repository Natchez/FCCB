import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyShoppingList } from './my-shopping-list';

describe('MyShoppingList', () => {
  let component: MyShoppingList;
  let fixture: ComponentFixture<MyShoppingList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyShoppingList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyShoppingList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
