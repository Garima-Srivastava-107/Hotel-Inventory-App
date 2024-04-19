class Employee{
    #id!:number;
    name!:string;
    address!:string;
    constructor(id:number,name:string,address:string){
        this.#id=id;
        this.name=name;
        this.address=address;
    }
    getNameWithAddress():string{
        return this.name+" "+this.address;
    }
    static getEmployeeCount():number{
        return 50;
    }
    get EmpId():number{
        return this.#id;
    }
    set EmpId(id:number){
        this.#id=id;
    }
}
class Manager extends Employee{
    constructor(id:number,name:string,address:string){
        super(id,name,address);
    }

}
console.log(Employee.getEmployeeCount());

let john=new Employee(1,"Garima","Chota Dhusah");
console.log(john.address);
console.log(john.getNameWithAddress);
interface User{
    name:string;
    id:number;
    email:string;
}
let {name:userName,id:userId}:User={name:"Garima",id:8,email:""};
