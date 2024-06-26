export interface Room{
availableRooms:number;
bookedRooms:number;
totalRooms:number;
}
export interface RoomList{
    roomNumber?:number;
    roomType:string;
    amenities:string;
    price:number;
    photos:string;
    checkinTime:string;
    checkoutTime:string;
     rating:number;
}