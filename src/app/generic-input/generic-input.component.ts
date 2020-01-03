import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Field } from '../models/field.model';

@Component({
  selector: 'app-generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.scss']
})
export class GenericInputComponent implements OnInit {

  // Variables entrée 
  @Input() inputParam: Field;
  @Input() labelBehavior: null;

  taskForm: FormGroup;

  constructor() { }

  ngOnInit() {
    console.log('champs transmis', this.inputParam);
  }
}
