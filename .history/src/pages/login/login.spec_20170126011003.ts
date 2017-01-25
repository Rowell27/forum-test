/* tslint:disable:no-unused-variable */

import { TestBed, async  } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginPage } from './login';
import { FireBaseService } from '../../services/firebase-service';


describe('AppComponent', () => {

  beforeEach(() => {
        let FireBaseServiceFake = {
            login(user , successCallback, failure){
                successCallback(  );
            },
            isLoggedIn(successCallback: ( key ) => void, failureCallback: ( error? ) => void ){
                successCallback ( "1234567689" );
            }
        }

        TestBed.configureTestingModule({
            imports : [
              RouterTestingModule
            ],
            declarations: [
              LoginPage
            ],
            providers: [ {provide: FireBaseService, useValue: FireBaseServiceFake } ]
        });
      
        let fixture = TestBed.createComponent(LoginPage);
        let  comp   =  fixture.componentInstance;

        // UserService from the root injector
        let userService = TestBed.get(FireBaseService);
        
    });

     let fixture = TestBed.createComponent(LoginPage);
    it('should create the app', async(() => {
         fixture = TestBed.createComponent(LoginPage);
         let loginpageDOM = fixture.debugElement.componentInstance;
        expect(loginpageDOM).toBeTruthy();
    }));

     it('should return false', async(() => {
     
       expect(fixture.).toBe(true);
    }));
});
