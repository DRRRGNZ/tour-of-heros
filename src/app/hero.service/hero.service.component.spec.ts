import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hero.ServiceComponent } from './hero.service.component';

describe('Hero.ServiceComponent', () => {
  let component: Hero.ServiceComponent;
  let fixture: ComponentFixture<Hero.ServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hero.ServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hero.ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
