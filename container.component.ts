import { AfterContentInit, Component, ContentChild, ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'hinv-container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent implements AfterContentInit{
  // You can access any component  which is loaded by ng content at runtime
@ContentChild(EmployeeComponent) employee!:EmployeeComponent;
ngAfterContentInit(): void {
  console.log(this.employee);
  this.employee.empName="Mohan Kumar";
}
}
