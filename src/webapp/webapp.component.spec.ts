import { TestBed, async } from '@angular/core/testing';
import { WebappComponent } from './webapp.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WebappComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(WebappComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'main2'`, () => {
    const fixture = TestBed.createComponent(WebappComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('main2');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(WebappComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to main2!');
  });
});
