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

  submitted = false;
  loginForm!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });


  }
  login(){
   this.router.navigate(["/home"]);
  }

  onSubmit() {
    this.submitted = true
    console.log(this.loginForm.value);
    if(this.loginForm.valid) {
      console.log('Subimit')
    }
  }

  hasError(field: string) {
    return this.loginForm.get(field)?.errors;
  }

}
