import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-produto-form',
  templateUrl: './add-produto-form.component.html',
  styleUrls: ['./add-produto-form.component.css']
})
export class AddProdutoFormComponent implements OnInit {

  form!: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
  }

}
