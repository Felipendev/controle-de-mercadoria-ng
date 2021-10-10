import { AccountService } from './../../../core/authentication/account.service';
import { AuthService } from './../../../core/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  administrador = {
    login: '',
    password: ''
  };

  submitted = false;
  loginForm!: FormGroup;

  constructor(
    private accountService: AccountService,
    private formbuilder: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

  }

  async onSubmit() {
    try {
      const result = await this.accountService.login(this.administrador);
      console.log(`Login efetuado: ${result}`);
      this.router.navigate(['']);
    } catch (error) {
      console.log(error);
    }
  }

  // hasError(field: string) {
  //   return this.loginForm.get(field)?.errors;
  // }

  public login() {
    this.accountService.login(this.administrador);
  }

}
