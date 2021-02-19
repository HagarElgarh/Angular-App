import { Injectable } from '@angular/core';
import { AngularFireDatabase , AngularFireList} from '@angular/fire/database';
import { observable, Observable } from 'rxjs';
import { Iuser } from './../Viewmodeles/iuser';
import { map } from 'rxjs/operators'
import { IuserAdd } from './../Viewmodeles/iuser-add';
// import { Iuser } from 'src/app/Viewmodeles/iuser';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  iUsersRef: AngularFireList<Iuser>;

  constructor(private db : AngularFireDatabase) {

    this.iUsersRef = this.db.list<Iuser>('user');
  }


adduser(item: Iuser){

this.iUsersRef.push(item);
}
;


getallatours():Observable<Iuser[]>{
  
return this.iUsersRef.snapshotChanges().pipe(
  map(users => users.map (user => {
    return {key: user.payload.key, ...user.payload.val()} as Iuser;
  }))
);
}

}