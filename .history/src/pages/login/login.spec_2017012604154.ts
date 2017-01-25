/* tslint:disable:no-unused-variable */

import { TestBed, async  } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginPage } from './login';
import { FireBaseService } from '../../services/firebase-service';


describe('AppComponent', () => {



  beforeEach(() => {
    let FireBaseServiceFake = {
      

    }

    TestBed.configureTestingModule({
      imports : [
        RouterTestingModule
      ],
      declarations: [
        LoginPage
      ],
       providers:    [ {provide: FireBaseService, useValue: FireBaseServiceFake } ]
    });
  
   let fixture = TestBed.createComponent(LoginPage);
   let  comp   =  fixture.componentInstance;

    // UserService from the root injector
   let userService = TestBed.get(FireBaseService);

   
  
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
