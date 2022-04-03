import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {
  public intervalSubs: Subscription;

  constructor() {
   
    /*this.retornaObservable().pipe(
      retry(1)
    ).subscribe(  // Un OBSERVABLE tiene un NEXT (VALOR), un ERROR y un COMPLETED que es cuando se termina de ejecutar.
      valor => console.log('subs:', valor),
      error => console.warn('Error', error),
      () => console.info('Observable terminado')
    );*/
    this.intervalSubs =   this.retornaIntervalo()
    .subscribe(console.log)    
   }

ngOnDestroy(): void {
  this.intervalSubs.unsubscribe();    
}

  retornaIntervalo(): Observable<number>{
    return interval(500).
          pipe(
          take(10),
          map(valor => valor + 1),
            //return valor +1 // puedo poner un string si quiero 
            //return 'Hola Mundo' + valor + 1;
            //return valor + 1
            filter(valor => (valor % 2 === 0)? true : false),
            take(10),
          )            
  }

  retornaObservable(): Observable<number>{
    let i = -1;

    const obs$ = new Observable<number>(observer => {     
      const intervalo = setInterval(() => {
        i++
        observer.next(i); 
        
        if( i === 4){
          clearInterval(intervalo);
          observer.complete();
        }

        if(i === 2){
          observer.error('i llegó al valor de 2');
        }
      },1000)
    });

    return obs$;

  }

}


/*
Retray() es la cantidad de veces que yo quiero que intenté en ejecutar el observable.

El método pipe te permite aplicar varios operadores sobre el flujo de datos de forma secuencial.
Es un Observable el metodo PIPE es cuando le conectan una conexión a una manguera que tiene todo el flujo 

Transforma la información que fluye por todo el observable

MAP en los observables Transformar las salidas de un observable, pero también para generar más observables.

Filter--> filtrar información que flujo dentro de un observable.

*/