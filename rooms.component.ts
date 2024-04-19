import { AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomListComponent } from "./room-list/room-list.component";
import { HeaderComponent } from "../header/header.component";
import { RoomsService } from './services/rooms.service';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'hinv-rooms',
    standalone: true,
    templateUrl: './rooms.component.html',
    styleUrl: './rooms.component.scss',
    imports: [CommonModule, RoomListComponent, HeaderComponent]
})
export class RoomsComponent implements DoCheck,OnInit,AfterViewInit,OnDestroy{
  // Properties
  title:string="Room List";
hotelName:string="Hilton Hotel";
numberOfRooms:number=57;
hideRooms:boolean=true;
selectedRoom!:RoomList;
rooms:Room={
  availableRooms:20,
  bookedRooms:10,
  totalRooms:30
}
roomList:RoomList[]=[];
@ViewChild(HeaderComponent) headerComponent!:HeaderComponent;
@ViewChildren(HeaderComponent) headerChildrenComponent!:QueryList<HeaderComponent> ;
stream=new Observable(observer =>{
  observer.next('user1');
  observer.next('user2');
  observer.next('user3');
  // observer.error('error');
});
subscription!:Subscription;
// room$=this.roomsService.getRooms$;
//Functions
constructor(private roomsService:RoomsService ){

}
ngOnInit(): void {
  // this.stream.subscribe({
  //   next:(value)=>console.log(value),
  //   complete:()=>console.log('complete'),
  //   error:(err)=>console.log(err),
    
  // });
  // this.stream.subscribe((data)=>{
  //   console.log(data);
  // });
  this.subscription=this.roomsService.getRooms$.subscribe(rooms =>{
    this.roomList=rooms;
  });
//   console.log(this.roomsService.getRooms());
//  this.roomList= this.roomsService.getRooms();
}
ngAfterViewInit(): void {
  // console.log(this.headerComponent);
  this.headerComponent.title="Room View";
  this.headerChildrenComponent.last.title="Last Title";
}
toggle(){
this.hideRooms=!this.hideRooms;
this.title='Room List title';
}
selectRoom(room: RoomList) {
//  console.log(room);
 this.selectedRoom=room;
  }
  addRoom(){
    const newRoom:RoomList={
      // roomNumber:6,
      roomType:'PSIT Delux Room',
      amenities:"Hotel amenitiesridge,Car",
      price:32200,
      photos:'wltonj@1344',
      checkinTime:'19-09=2090',
      checkoutTime:'24-09-2002',
      rating:4.5
    };
    this.roomsService.addRoom(newRoom).subscribe((data)=>{
      this.roomList=[...this.roomList,data];
    });
    
  }
  editRoom(){
    const newRoom:RoomList={
      roomNumber:32,
      roomType:'Morgan Stanley Room',
      amenities:"Hotel Radisson Blue,Car",
      price:1032200,
      photos:'ibis@1344',
      checkinTime:'18-09-2020',
      checkoutTime:'26-09-2024',
      rating:5.5
    };
    const id=32;
    this.roomsService.editRoom(id,newRoom).subscribe((data)=>{
      this.roomList=this.updateRoomList(id,newRoom);
    })
  }
  updateRoomList(id:number,room:RoomList):RoomList[]{
  const indexToUpdate=this.roomList.findIndex(item=>item.roomNumber===id);
  this.roomList[indexToUpdate]=room;
  this.roomList=[...this.roomList];
  return this.roomList;
  }
  deleteRoom(){
    const id=59;
    this.roomsService.deleteRoom(id).subscribe((data)=>{
      console.log('data');
      const idx= this.roomList.findIndex(obj => obj.roomNumber ==id);
      this.roomList.splice(idx,1);
    // this.roomList.filter((room)=>room.roomNumber!=id);
    console.log(this.roomList);
this.roomList=[...this.roomList];
    });
    // this.roomsService.deleteRoom(id).subscribe((data)=>{
    //   this.roomList=this.roomList.filter(item=>item.roomNumber===id);
    //   this.roomList=[...this.roomList];
    //   console.log(data);
    // });
  }
  ngDoCheck(){
    console.log('do check is called');
  }
  ngOnDestroy(): void {
    //if there is active subscription go and just unsubscribe to it
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
