import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";
import { ContainerComponent } from "./container/container.component";
import { EmployeeComponent } from "./employee/employee.component";
import { localStorageToken } from './localstorage.token';
import { InitService } from './init.service';
import { AppNavComponent } from "./app-nav/app-nav.component";


@Component({
    selector: 'hinv-root',
    standalone: true,
    // template:`<h1>Hii my name is Garima Srivastava</h1>
    // <p>I am currently pursuing B.Tech in CSE</p>`,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, RoomsComponent, ContainerComponent, EmployeeComponent, RouterLink, AppNavComponent]
})
export class AppComponent  implements OnInit{
  title = 'hotelinventoryapp';
  //lOADING DIV USING TEMPLATE REF
  // we got the acces of an html element using template ref then we assigned some value to that particular html element using the native property
  // @ViewChild('name',{static:true}) name!: ElementRef;
  // ngOnInit(): void {
  //   this.name.nativeElement.innerText="Hi guys my name is Garima";
  // }
  // loginTypes='Admin';
  // @ViewChild('user',{read:ViewContainerRef})vcr!:ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef=this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms=90;
  // }
  // addRoomComponent(){
  //   const componentRef=this.vcr.createComponent(RoomsComponent);
  // }
  constructor(@Inject(localStorageToken) private localStorage:any,private initService:InitService){
    console.log(initService.config);
    console.log(initService.config);
  }
  ngOnInit(): void {
    this.localStorage.setItem('name','Hilton Hotel');
  }
}
