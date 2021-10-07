import { AccountService } from './../../../core/authentication/account.service';
import { AuthService } from './../../../core/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  login = {
    nome: '',
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
    // this.loginForm = this.formbuilder.group({
    //   userName: [null, [Validators.required, Validators.min]],
    //   password: [null, Validators.required]
    // });
  }

  async onSubmit() {
    try {
      const result = await this.accountService.login(this.login);
      console.log(`Login efetuado: ${result}`);
      this.router.navigate(['']);
    } catch (error) {
      console.log(error);
    }
  }

  hasError(field: string) {
    return this.loginForm.get(field)?.errors;
  }

}
