import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EpisodioDetailPage } from './episodio-detail.page';

describe('EpisodioDetailPage', () => {
  let component: EpisodioDetailPage;
  let fixture: ComponentFixture<EpisodioDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodioDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
