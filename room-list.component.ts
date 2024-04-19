import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'hinv-room-list',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RoomListComponent implements OnChanges{

@Input() rooms:RoomList[]|null=[];
@Input() title:string='';
@Output() selectedRoom =new EventEmitter<RoomList>();



selectRoom(room:RoomList){
  this.selectedRoom.emit(room);
}
ngOnChanges(changes: SimpleChanges): void {
 console.log(changes);
 //if the title property has changes u can do something when this title is changed
 if(changes['title']){
this.title=changes['title'].currentValue.toUpperCase();
 }
}


}
