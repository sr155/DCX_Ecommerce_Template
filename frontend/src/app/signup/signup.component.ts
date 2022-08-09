import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators ,FormArray,FormControl} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  requiredForm=new FormGroup({
    name: new FormControl(),
    email:new FormControl(),
    password:new FormControl()
  });
  constructor(private fb: FormBuilder) {
     this.myForm();
  }

  //Create required field validator for name
  myForm() {
     this.requiredForm = this.fb.group({
     name: ['', Validators.required, Validators.pattern('[A-Za-z]{1,32}') ],
     email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
     password: ['', [Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]]  
           
     });
  }
  submit(){
    alert("signup successsfull")
    window.location.reload();
  }
  ngOnInit()
  {

  }
}