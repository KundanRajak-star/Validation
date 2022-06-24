import { Component ,Input} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loginForm:FormGroup
  myObservable!:Observable<any>

 constructor(){
  this.loginForm=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required, Validators.minLength(3)])
  })
 }
 onLogin(){
 this.myObservable=new Observable((emmiter)=>{
  emmiter.next(this.loginForm.value)
 })
 this.myObservable.subscribe((data)=>{
  console.log(data,"login")
 })
 }

}
