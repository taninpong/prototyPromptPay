import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PpayPaymentDetailPage } from './ppay-payment-detail.page';

describe('PpayPaymentDetailPage', () => {
  let component: PpayPaymentDetailPage;
  let fixture: ComponentFixture<PpayPaymentDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PpayPaymentDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PpayPaymentDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
