import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string="";
  password:string="";
  errorMessage:string="";
  test:boolean=false;

  constructor() { }

  data:String[];
  ngOnInit(): void {
  }

  login(){
    try{

    // console.log("call made")
    // let result:boolean=false;
    // this._http.get<boolean>("https://localhost:44393/auth/index").pipe(map(x=>
    // result=x));
    // this.test=result;
    // console.log(result);
    }
    catch (e){
      console.log(e);
    }
  }

}
