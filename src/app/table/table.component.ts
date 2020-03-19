import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { FormsModule } from '@angular/forms';

 

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  employees: Array<Employee>;
  columns: string[];

  constructor() { }

  ngOnInit(): void {
    this.columns = ["ID","Name"];
  
    this.employees = [ {empname: "JOHN", empid: "100"}, {empname: "PETER", empid: "200"}] 
  }
  register(form){
    console.log(this.employees)
  }

}
