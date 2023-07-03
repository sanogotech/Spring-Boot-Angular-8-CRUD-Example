# Angular8-SpringBoot-CRUD-Tutorial
Develop a single page application(SPA) using Angular 8 as a front-end and Spring boot restful API as a backend.https://medium.com/@mehulkothari05/spring-boot-angular-8-crud-example-8aeafd47b54


##  Angular  Prise en Main

* https://angular.fr/

* https://iner-dukoid.developpez.com/tutoriels/web/introduction-framework-web-angular/

* https://soat.developpez.com/tutoriels/javascript/angular-4-pas-a-pas/


##  Home Page

![Home Page Angular](https://github.com/sanogotech/Spring-Boot-Angular-8-CRUD-Example/blob/master/docs/images/homepageList.jpg)


## Run Spring Boot application
```
mvn spring-boot:run
```
The Spring Boot Server will export API at port `8081`.

##  REST API

http://localhost:8080/springboot-crud-rest/api/v1/employees

## Run Angular Client


```
* Désinstallation d'angular-cli
npm uninstall -g @angular/cli
```


```
npm cache clear --force
 * Installation d'angular-cli dernière version disponible
npm install -g @angular/cli
```

```
npm install
ng serve   (default port 4200)
or
* ng serve --port 8081
```

##   Troubleshooting

https://stackoverflow.com/questions/74726224/opensslerrorstack-error03000086digital-envelope-routinesinitialization-e

opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ]

```
set NODE_OPTIONS=--openssl-legacy-provider

```

## Prise en main Angular

* https://soat.developpez.com/tutoriels/javascript/angular-4-pas-a-pas/



- comment créer un projet Angular 4 from scratch en utilisant Angular CLI
- les bases d'une application Angular (structure du projet, module, component, template…)
- comment communiquer entre le DOM et notre component en utilisant les quatre techniques de data binding pour avoir un début de projet fonctionnel.
- la création de Services ;
- la création de Pipes ;
- l'utilisation de l'HttpClient pour les appels d'API ;
- l'utilisation des routers afin de naviguer dans notre application.


## Mise en Pratique

- Un composant

Un « component » Angular contient :

- un template contenant l'interface utilisateur en HTML. Nous utiliserons le databinding afin de rendre la vue dynamique ;
- une Class contenant le code associé à la vue, des propriétés et méthodes logiques qui seront utilisées dans la vue ;
- des metadata nous permettant de définir la classe comme étant un composant Angular (component).

```angular

import { Component } from '@angular/core';

@Component({
        selector: 'soat-products',
        templateUrl: './product.component.html'
})

export class ProductComponent {
        pageTitle: string = "Products Page"

        someFunction(){
                //Do your stuff here
        }

}
```


```
ng g component products/product-create
```

** Composant add Property

```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})


export class ProductCreateComponent implements OnInit {
	
  //PropertyName: Data type = "Default value"
  pageTitle: string = "Products Page In Action .."

  constructor() { }

  ngOnInit() {
  }

}

```

** Route
- app-routing.module.ts

```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ProductCreateComponent  } from './products/product-create/product-create.component';


const routes: Routes = [

  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
   { path: 'addproduct', component: ProductCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


```


** Page HTML 

```
 <h1>{{'Title :'  + pageTitle}}</h1>
```
