import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudDevOps } from './cloud-dev-ops';

describe('CloudDevOps', () => {
  let component: CloudDevOps;
  let fixture: ComponentFixture<CloudDevOps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudDevOps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudDevOps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
