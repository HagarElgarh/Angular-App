import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/services/data-base.service';
import { Iuser } from 'src/app/Viewmodeles/iuser';

const ELEMENT_DATA: Iuser[] = [
  {item:{ fIrstName:'gogo',lastname:'yoy',Age:45,nathinality:'ff',Email:'ddd@ggg.co'}},
  {item:{ fIrstName:'gogo',lastname:'yoy',Age:45,nathinality:'ff',Email:'ddd@ggg.co'}},
  {item:{ fIrstName:'gogo',lastname:'yoy',Age:45,nathinality:'ff',Email:'ddd@ggg.co'}}

];
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})


export class AdminComponent implements OnInit {

  dataSource :Iuser[] = [];

  users: Iuser[] =[]
  // displayedColumns: string[] = ['fIrstName', 'lastname', 'Age', 'nathinality','Email'];
  // dataSource = ELEMENT_DATA;
   displayedColumns: string[] = ['fIrstName', 'lastname', 'Age', 'nathinality','Email','date'];

  constructor(private userSer: DataBaseService) { 
    this.userSer.getallatours().subscribe(data => {
      // console.log(er[2].item)
      
      // for(let i=0 ; i<er.length ; i++){
      // console.log(er[i].item?.Age)
      this.users=data
      
      // }
    this.dataSource = this.users;

      // let displayedColumns: string[] = ['fIrstName', 'lastname', 'Age', 'nathinality','Email'];
    });
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
