import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UpdateService } from 'src/app/services/update.service';

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
    private updateService: UpdateService
  ) {
  }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: new FormControl(),
      password: new FormControl(),
    });

    this.authService.getCurrentUser().subscribe((data) => {
      if (data != "") {
        this.router.navigateByUrl(`/users/${data}`)
      }
    })
  }

  get formControls() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    // console.log(this.loginForm.value['username'])

    this.authService.logIn(this.loginForm.value).subscribe(data => {
      this.router.navigateByUrl(`/users/${data.username}`)
    })

    this.updateService.updateValue(this.loginForm.value.username);
  }
}
