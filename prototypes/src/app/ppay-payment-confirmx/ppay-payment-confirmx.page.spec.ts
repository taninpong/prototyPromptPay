import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PpayPaymentConfirmxPage } from './ppay-payment-confirmx.page';

describe('PpayPaymentConfirmxPage', () => {
  let component: PpayPaymentConfirmxPage;
  let fixture: ComponentFixture<PpayPaymentConfirmxPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PpayPaymentConfirmxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PpayPaymentConfirmxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
