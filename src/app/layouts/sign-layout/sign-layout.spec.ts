import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignLayout } from './sign-layout';

describe('SignLayout', () => {
  let component: SignLayout;
  let fixture: ComponentFixture<SignLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(SignLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
