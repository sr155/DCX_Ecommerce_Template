import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators ,FormArray,FormControl} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title='app';
  requiredForm=new FormGroup({
   
    email:new FormControl(),
    password:new FormControl()
  });
  constructor(private fb: FormBuilder) {
     this.myForm();
  }

  //Create required field validator for name
  myForm() {
     this.requiredForm = this.fb.group({
     
     email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
     password: ['', [Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]]  
           
     });
  }
  submit(){
    alert("login successsfull")
    // window.location.reload();
  }
  ngOnInit()
  {

  }
}
