import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    /*const promesa = new Promise((resolve, reject) =>{
      if(false){
        resolve('hola mundo')
      }else{
        reject('Algo salió mal');
      }
     
    });
    promesa.then(() =>{
      console.log('Hey termine')
    })
    .catch(error => console.log('Error', error));
    console.log('fin del init')*/
    this.getUsuarios().then(usuarios => {
      console.log(usuarios);
    });
  }

  getUsuarios(){

    const promesa = new Promise(resolve => {
      fetch('https://reqres.in/api/users')
      .then(resp => resp.json())
      .then(body => resolve(body.data));
    })
    return promesa;    
  }

}
