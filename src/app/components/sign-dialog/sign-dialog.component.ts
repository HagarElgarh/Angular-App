import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder ,FormControl, Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-sign-dialog',
  templateUrl: './sign-dialog.component.html',
  styleUrls: ['./sign-dialog.component.scss']
})
export class SignDialogComponent implements OnInit {

  
  
      Email= new FormControl('',[Validators.required,Validators.minLength(6),Validators.email,Validators.maxLength(100)]);
      Age= new FormControl('',[Validators.required]);
      

      
  getErrorMessage() {
    if (this.Email.hasError('')|| this.Age.hasError('')) {
      return 'You must enter a value';
    }

    return this.Email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor(private router:Router,public dialogRef: MatDialogRef<SignDialogComponent>,
    private logser: AuthService) { }

  ngOnInit(): void {
  }

  openadmin(){
    this.logser.signup(this.Email.value,this.Age.value)
    .then(result=>
      {
        
        // this.errorMsg='';
        console.log(this.Email.value)
        console.log(this.Age.value)
        this.router.navigate(['/admin/admin']);
        this.dialogRef.close();
        console.log(result)
        
      })
    .catch(err=>
      {
        // this.errorMsg=err.message
        this.dialogRef.close();

      console.log(err)
      
      
      })
    // console.log(this.Email.value)
    // console.log(this.Age.value)
    // this.router.navigate(['/']);
    // this.dialogRef.close();


  }



}
