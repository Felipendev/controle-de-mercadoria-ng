
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
    private formbuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

  }

onSubmit() {
  this.submitted = true;
  this.router.navigate(['/home'])

  }

  // hasError(field: string) {
  //   return this.loginForm.get(field)?.errors;
  // }

  public login() {
    this.submitted = false
    this.loginForm.reset(); 
  }

}
