// Importing necessary modules and components for testing
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

// Describing the test suite for AppComponent
describe('AppComponent', () => {
  // Before each test, configure the testing module
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Importing the AppComponent for testing
      imports: [AppComponent],
    }).compileComponents(); // Compiling the components
  });

  // Test case to check if the AppComponent is created successfully
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); // Creating a fixture for AppComponent
    const app = fixture.componentInstance; // Getting the instance of AppComponent
    expect(app).toBeTruthy(); // Expecting the app instance to be truthy (i.e., it exists)
  });

  // Test case to check if the title property is 'angular-starter'
  it(`should have the 'angular-starter' title`, () => {
    const fixture = TestBed.createComponent(AppComponent); // Creating a fixture for AppComponent
    const app = fixture.componentInstance; // Getting the instance of AppComponent
    expect(app.title).toEqual('angular-starter'); // Expecting the title property to be 'angular-starter'
  });

  // Test case to check if the title is rendered in the template
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent); // Creating a fixture for AppComponent
    fixture.detectChanges(); // Triggering change detection
    const compiled = fixture.nativeElement as HTMLElement; // Getting the native element of the component
    // Expecting the rendered title to contain 'Hello, angular-starter'
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular-starter');
  });
});
