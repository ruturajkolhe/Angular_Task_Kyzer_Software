import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{
  repeatPass: string ="none";
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  registerForm= new FormGroup({
    firstname: new FormControl("",[Validators.required,Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]),
    middlename: new FormControl("",[Validators.required,Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]),
    lastname: new FormControl("",[Validators.required,Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl("",[Validators.required , Validators.email]),
    mobile: new FormControl("",[Validators.required,Validators.pattern("^[0-9]*"),Validators.minLength(10),Validators.maxLength(10)]),
    gender: new FormControl("",[Validators.required]),
    dob: new FormControl("",[Validators.required]),
    hsc: new FormControl("",[Validators.required,Validators.pattern("[0-9]*"),Validators.maxLength(2)]),
    ssc: new FormControl("",[Validators.required,Validators.pattern("[0-9]*"),Validators.maxLength(2)]),
    address: new FormControl("",[Validators.required]),
    course: new FormControl("",[Validators.required]),
    pwd: new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
    rpwd: new FormControl("")
  });

  registerSubmited(){
    if(this.pwd.value ===this.rpwd.value){
      console.log("Submited");
      
      this.repeatPass ='none'
    }else{
      this.repeatPass = 'inline'
    }
  

  }
  get FirstName(): FormControl{
    return this.registerForm.get("firstname") as FormControl;
  } 
  get MiddleName(): FormControl{
    return this.registerForm.get("middlename") as FormControl;
  } 
  get LastName(): FormControl{
    return this.registerForm.get("lastname") as FormControl;
  }
   get email(): FormControl{
    return this.registerForm.get("email") as FormControl;
  } 
  get mobile(): FormControl{
    return this.registerForm.get("mobile") as FormControl;
  } 
  get gender(): FormControl{
    return this.registerForm.get("gender") as FormControl;
  } 
  get dob(): FormControl{
    return this.registerForm.get("dob") as FormControl;
  }
   get hsc(): FormControl{
    return this.registerForm.get("hsc") as FormControl;
  }
   get ssc(): FormControl{
    return this.registerForm.get("ssc") as FormControl;
  }
  get address(): FormControl{
    return this.registerForm.get("address") as FormControl;
  }
  get Course(): FormControl{
    return this.registerForm.get("course") as FormControl;
  }
  get pwd(): FormControl{
    return this.registerForm.get("pwd") as FormControl;
  }
  get rpwd(): FormControl{
    return this.registerForm.get("rpwd") as FormControl;
  }
}
