import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { EmployeeService } from "../employee.service";
import { Employee } from "../employee";
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Observable<Employee[]>;

   //Constructeur
  constructor(private employeeService: EmployeeService,
    private router: Router) {}

  ngOnInit() {
	  /* ngOnInit est une méthode du cycle de vie d'un composant Angular.
	  Elle est appelée une fois que tous les composants du composant ont été initialisés, c'est-à-dire que tous les data-bindings sont prêts. 
	  C'est le moment idéal pour effectuer des opérations de configuration sur le composant, comme par exemple récupérer des données à partir d'un service ou d'une API.
	  */
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  employeeDetails(id: number){
    this.router.navigate(['details', id]);
  }
}