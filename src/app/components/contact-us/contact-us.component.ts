import { Component, OnInit } from '@angular/core';
// import{AngularFireDatabaseModule} from '@angular/fire/database'
import { FormGroup, FormBuilder ,FormControl, Validators} from '@angular/forms';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';
import { Router } from '@angular/router';
import { DataBaseService } from 'src/app/services/data-base.service';
import { Iuser } from './../../Viewmodeles/iuser';
// import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { IuserAdd } from './../../Viewmodeles/iuser-add';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  loginFrm:FormGroup;
  list:Iuser={}
  listadd:Iuser={}
  errorMsg:string=''
  // email = new FormControl('', [Validators.required, Validators.email]);
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  
  fIrstName= new FormControl('',[Validators.required,Validators.minLength(5)]);
  lastname= new FormControl('',[Validators.required,Validators.minLength(5)]);
      Email= new FormControl('',[Validators.required,Validators.minLength(6),Validators.email,Validators.maxLength(100)]);
      Age= new FormControl('',[Validators.required]);
      nathinality= new FormControl('',[Validators.required,Validators.minLength(3)])

  getErrorMessage() {
    if (this.fIrstName.hasError('')||this.Email.hasError('')||this.lastname.hasError('')||
    this.Age.hasError('')||this.nathinality.hasError('')) {
      return 'You must enter a value';
    }

    return this.Email.hasError('email') ? 'Not a valid email' : '';
  }

    constructor(private router:Router,private userSer: DataBaseService,private fb: FormBuilder) {
      this.loginFrm=this.fb.group({
    //     email : new FormControl('', [Validators.required, Validators.email]),

    // fIrstName:['',[Validators.required,Validators.minLength(5)]]
    // ,lastname:['',[Validators.required,Validators.minLength(5)]]
    //     ,Email:['',[Validators.required,Validators.minLength(6),Validators.email,Validators.maxLength(100)]]
    //     ,Age:['',[Validators.required]]
    //     ,nathinality:['',[Validators.required]]
  
  
      });
     }

  ngOnInit(): void {
    
  }

  signup(){
    let datee:number =  Date.now()
    this.listadd={
      Age:this.Age.value,
      fIrstName:this.fIrstName.value,
      lastname:this.lastname.value,
      Email:this.Email.value,
      nathinality:this.nathinality.value,
      date:datee

    }
  
    console.log(this.list)
    this.userSer.adduser(this.listadd)
    
  }

  get(){
    this.list.item={
      Age:this.Age.value,
      fIrstName:this.fIrstName.value,
      lastname:this.lastname.value,
      Email:this.Email.value,
      nathinality:this.nathinality.value,

    }
    console.log(this.list)

    // console.log(this.email.value)
    // this.userSer.getallatours().subscribe(er => {
    //   console.log(er[2].item)
      
    //   for(let i=0 ; i<er.length ; i++){
    //   // console.log(er[i].fIrstName)
    //   console.log(er[i].item?.Age)
    //   }
    
    // })
    
  }

}
