# Angular8-SpringBoot-CRUD-Tutorial
Develop a single page application(SPA) using Angular 8 as a front-end and Spring boot restful API as a backend.https://medium.com/@mehulkothari05/spring-boot-angular-8-crud-example-8aeafd47b54


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