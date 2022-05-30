import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PpayPaymentEslipPage } from './ppay-payment-eslip.page';

describe('PpayPaymentEslipPage', () => {
  let component: PpayPaymentEslipPage;
  let fixture: ComponentFixture<PpayPaymentEslipPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PpayPaymentEslipPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PpayPaymentEslipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
