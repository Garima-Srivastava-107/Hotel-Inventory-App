import { Component } from '@angular/core';
import { RoomList } from '../rooms';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'hinv-rooms-ad',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './rooms-ad.component.html',
  styleUrl: './rooms-ad.component.scss'
})
export class RoomsAdComponent {
  room:RoomList={
    roomType:'',
    amenities:'',
    price:0,
    photos:'',
    checkinTime:'',
    checkoutTime:'',
    rating:0
  };
successMessage: string='';
  constructor(private roomsService:RoomsService){}
  AddRoom(roomsForm:NgForm){
   this.roomsService.addRoom(this.room).subscribe((data)=>{
   this.successMessage="Rooms Added Successfully";
  //  roomsForm.reset(); 
  //  or
  roomsForm.resetForm({
    roomType:'',
    amenities:'',
    price:0,
    photos:'',
    checkinTime:'',
    checkoutTime:'',
    rating:0
  });
   });
  }
}
