import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

// group of test cases -- test suite
describe('AppComponent', () => {
  // executed before all test cases are exec
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  // test case
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // test case
  it(`should have as title 'user-mgmt-app-sep2020'`, () => {
    const fixture = TestBed.createComponent(AppComponent); // taking the component to create testbed
    const app = fixture.componentInstance; // obj of the appcomp class
    expect(app.title).toEqual('user-mgmt-app-sep2020');
  });

  // test case
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('user-mgmt-app-sep2020 app is running!');
  });

});
