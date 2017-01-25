/* tslint:disable:no-unused-variable */

import { TestBed, async  } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { LoginPage } from './login';
import { appRoutes } from '../../app/app.module';

describe('AppComponent', () => {


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginPage
      ],
      providers:[
          RouterModule.forRoot( appRoutes )
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(LoginPage);
    const loginpage = fixture.debugElement.componentInstance;
    expect(loginpage
    ).toBeTruthy();
  }));

//   it(`should have as title 'app works!'`, async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app.title).toEqual('app works!');
//   }));

//   it('should render title in a h1 tag', async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('h1').textContent).toContain('app works!');
//   }));
});
