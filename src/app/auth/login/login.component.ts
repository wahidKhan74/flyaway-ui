import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')   
  });
  constructor(private authSrv:AuthService,private router :Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.authSrv.userLogin(this.loginForm.value).subscribe(
      res=>{
        sessionStorage.setItem('token',res['token']);
        this.router.navigateByUrl('/flights/airports');
      },err=>{
        console.log(err);
      }
    )
    
  }
}
