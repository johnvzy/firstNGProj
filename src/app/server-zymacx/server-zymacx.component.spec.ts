import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerZymacxComponent } from './server-zymacx.component';

describe('ServerZymacxComponent', () => {
  let component: ServerZymacxComponent;
  let fixture: ComponentFixture<ServerZymacxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerZymacxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerZymacxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
