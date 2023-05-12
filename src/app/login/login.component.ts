import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isAuthenticated: Boolean = false;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
  }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: new FormControl(),
      password: new FormControl(),
    });

    this.authService.getCurrentUser().subscribe((data) => {
      if(data != ""){
        this.router.navigateByUrl(`/users/${data}`)
      }
    })
  }

  get formControls() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    console.log(this.loginForm.value['username'])
    this.authService.logIn(this.loginForm.value).subscribe(data => {
      this.router.navigateByUrl(`/users/${data.username}`)
    })
  }
}
