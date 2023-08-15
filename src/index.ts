import {Observable, Observer} from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Siguiente [next]: ', value),
    complete: () => console.log('Completado [obs}'),
    error: error => console.warn('Error: ', error)
}

//const obs$ = Observable.create();
const obs$ = new Observable<string>(pepe => {

        pepe.next('Hola');
        pepe.next('Mundo');
        
        pepe.next('Hola');
        pepe.next('Mundo2');

        // Forzar un error
        // const a = undefined;
        // a.nombre = 'Fernando';

        pepe.complete();

        pepe.next('Hola');
        pepe.next('Mundo3');

    });

    


// obs$.subscribe(resp => {
//     console.log(resp);
// });

// obs$.subscribe(console.log);

// obs$.subscribe( 
//     valor => console.log('Siguiente: ', valor),
//     error => console.warn('Error: ', error),
//     () => console.info('Completado')    
//  );

obs$.subscribe(observer);
