import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsentInfoUserTemplatePage } from './consent-info-user-template.page';

describe('ConsentInfoUserTemplatePage', () => {
  let component: ConsentInfoUserTemplatePage;
  let fixture: ComponentFixture<ConsentInfoUserTemplatePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentInfoUserTemplatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsentInfoUserTemplatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
