import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/services/data-base.service';
import { Iuser } from 'src/app/Viewmodeles/iuser';

const ELEMENT_DATA: Iuser[] = [
  {fIrstName:'gogo',lastname:'elgarh',Age:23,nathinality:'egyption',Email:'hagar.elgarh98@gmail.com'},
  { fIrstName:'zoza',lastname:'adam',Age:22,nathinality:'egyption',Email:'azhar@gmail.com'},
  { fIrstName:'dina',lastname:'badr',Age:21,nathinality:'egyption',Email:'dinaBadr@gmail.com'}

];
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})


export class AdminComponent implements OnInit {

  dataSource :Iuser[] = [];

  // users: Iuser[] =[{id:'string',
  //   fIrstName:'String',
  //   lastname:'String',
  //   Email:'String',
  //   Age:25,
  //   nathinality:'string',
  //   date:23}]
  // displayedColumns: string[] = ['fIrstName', 'lastname', 'Age', 'nathinality','Email'];
  // dataSource = ELEMENT_DATA;
   displayedColumns: string[] = ['fIrstName', 'lastname', 'Age', 'nathinality','Email','date'];

  constructor(private userSer: DataBaseService) { 
    // this.userSer.getallatours().subscribe(data => {
      // console.log(er[2].item)
      
      // for(let i=0 ; i<er.length ; i++){
      // console.log(er[i].item?.Age)
      // this.users=data
      
      // }
    this.dataSource = ELEMENT_DATA;

      // let displayedColumns: string[] = ['fIrstName', 'lastname', 'Age', 'nathinality','Email'];
    // });
}
   


  ngOnInit(): void {
    // this.dataSource = ELEMENT_DATA;
console.log(this.dataSource)
    //  console.log(this.email.value)
    // this.userSer.getallatours().subscribe(er => {
    //   console.log(er[2].item)
      
    //   for(let i=0 ; i<er.length ; i++){
    //   console.log(er[i].item?.Age)
    //   this.users.push(er[i])
    //   }
    //   let displayedColumns: string[] = ['fIrstName', 'lastname', 'Age', 'nathinality','Email'];
      // let dataSource = this.users;
    // })
    
  }

}
