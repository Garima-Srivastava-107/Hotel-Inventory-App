import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, async, map } from 'rxjs';

@Component({
  selector: 'hinv-rooms-booking',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './rooms-booking.component.html',
  styleUrl: './rooms-booking.component.scss'
})
export class RoomsBookingComponent implements OnInit{
id:number=0;
// id$!:Observable<number>;
 //By using map operator
 id$=this.router.params.pipe(
    map(params=>params['id'])
  )
constructor(private router:ActivatedRoute){}
ngOnInit(): void {
  //using rxjs operator by avoiding subscription
  // this.id=this.router.snapshot.params['id'];
  // this.router.params.subscribe((params)=>{this.id=params['id']});
 
  //Incase we have multiple parameters then for that we will be using paramMap
  // this.router.paramMap.subscribe((params)=>{
  //   params.get('id');
  // })
}
}
