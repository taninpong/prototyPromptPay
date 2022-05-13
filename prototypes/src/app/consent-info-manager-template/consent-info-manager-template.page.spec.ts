import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsentInfoManagerTemplatePage } from './consent-info-manager-template.page';

describe('ConsentInfoManagerTemplatePage', () => {
  let component: ConsentInfoManagerTemplatePage;
  let fixture: ComponentFixture<ConsentInfoManagerTemplatePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentInfoManagerTemplatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsentInfoManagerTemplatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
