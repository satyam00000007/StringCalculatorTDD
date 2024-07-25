import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });


  // Title Check
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'String Calculator TDD'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('String Calculator TDD');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.calculator h2')?.textContent).toContain('String Calculator TDD');
  });


  // input and textarea binding check
  it('should bind input to textarea with initial value', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const textarea = compiled.querySelector('textarea') as HTMLTextAreaElement;
    expect(textarea.value).toBe('');
  });

  it('should bind input to textarea and data flow from view to component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const textarea = compiled.querySelector('textarea') as HTMLTextAreaElement;
    textarea.value = '123,456';
    textarea.dispatchEvent(new Event('input'));
    const app = fixture.componentInstance;
    expect(app.input).toBe('123,456');
  });

  it('should bind input to textarea and data flow from component to view', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    const app = fixture.componentInstance;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const textarea = compiled.querySelector('textarea') as HTMLTextAreaElement;
      app.input = '789,1011';
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(textarea.value).toBe('789,1011');
      });
    });
  }));


}); 
