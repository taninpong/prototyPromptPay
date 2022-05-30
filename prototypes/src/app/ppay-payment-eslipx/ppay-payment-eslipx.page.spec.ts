import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PpayPaymentEslipxPage } from './ppay-payment-eslipx.page';

describe('PpayPaymentEslipxPage', () => {
  let component: PpayPaymentEslipxPage;
  let fixture: ComponentFixture<PpayPaymentEslipxPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PpayPaymentEslipxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PpayPaymentEslipxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
