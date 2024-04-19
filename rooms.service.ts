import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
// import { environment } from '../../../environments/environment.prod';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appConfig.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { shareReplay } from 'rxjs';
// import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList:RoomList[]=[];
  // headers=new HttpHeaders({token:'12345678kfnvk'});
  getRooms$=this.http.get<RoomList[]>('/api/hotel').pipe(shareReplay(1));
  // roomList:RoomList[]=[{
  //   roomNumber:1,
  //   roomType:'Delux Room',
  //   amenities:"Tv",
  //   price:400,
  //   photos:'anskj@1344',
  //   checkinTime:'12-02=2002',
  //   checkoutTime:'24-09-2002',
  //   rating:4.5
  // },
  // {
  //   roomNumber:2,
  //   roomType:'Simple Room',
  //   amenities:"Tv",
  //   price:400,
  //   photos:'anskj@1344',
  //   checkinTime:'12-02=2002',
  //   checkoutTime:'24-09-2002',
  //   rating:4.5
  // },
  // {
  //   roomNumber:3,
  //   roomType:'Plain Room',
  //   amenities:"Tv",
  //   price:400,
  //   photos:'anskj@1344',
  //   checkinTime:'12-02=2002',
  //   checkoutTime:'24-09-2002',
  //   rating:4.5
  // },
  // {
  //   roomNumber:4,
  //   roomType:'Normal Room',
  //   amenities:"Tv",
  //   price:400,
  //   photos:'anskj@1344',
  //   checkinTime:'12-02=2002',
  //   checkoutTime:'24-09-2002',
  //   rating:4.5
  // },
  // ];
  constructor(@Inject(APP_SERVICE_CONFIG) private config:any,private http:HttpClient) {
    // console.log(environment.apiEndpoint);
    console.log(this.config.apiEndpoint);
   }
  getRooms(){
    // return this.roomList;
    return this.http.get<RoomList[]>('/api/hotel');
  }
  addRoom(room:RoomList){
    return this.http.post<RoomList>('/api/hotel',room);
  }
  editRoom(id:number,room:RoomList){
    return this.http.put<RoomList>(`/api/hotel/${id}`,room);
  }
  deleteRoom(id:number){
    console.log(id+"aa");
    return this.http.delete(`/api/hotel/${id}`, {responseType: 'text'});
// return this.http.delete<string>(`/api/hotel/${id}`);
  }
}
