import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  addressForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.addressForm = this.formBuilder.group({
      username  : ['', Validators.required],
      password: ['', Validators.required]
  })
   }

  ngOnInit(): void { }

  get f() { return this.addressForm.controls; }
  onSubmit(){
    this.submitted = true;
    if(this.addressForm.invalid){
      return
    }else{
      console.log(this.addressForm.value);
      this.router.navigateByUrl('/home');
      alert("Successfully data is saved")
    }
  }

}
