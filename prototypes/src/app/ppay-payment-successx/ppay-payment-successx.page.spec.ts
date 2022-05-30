import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PpayPaymentSuccessxPage } from './ppay-payment-successx.page';

describe('PpayPaymentSuccessxPage', () => {
  let component: PpayPaymentSuccessxPage;
  let fixture: ComponentFixture<PpayPaymentSuccessxPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PpayPaymentSuccessxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PpayPaymentSuccessxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
