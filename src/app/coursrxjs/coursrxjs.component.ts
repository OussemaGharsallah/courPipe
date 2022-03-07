import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { filter, interval, map, observable, Observable, pairwise, take, tap, timeout, timer } from 'rxjs';

@Component({
  selector: 'app-coursrxjs',
  templateUrl: './coursrxjs.component.html',
  styleUrls: ['./coursrxjs.component.css']
})
export class CoursrxjsComponent implements OnInit {
compteur$!:Observable<String>
compteur2$!:Observable<boolean>
compteur1$!:Observable<number>
etat:boolean=false;
  constructor() { }

  ngOnInit(): void {
    // this.compteur$=interval(1000)
    // console.log(this.compteur$);
    
    // console.log(interval(1000).subscribe(value=>console.log(value)))
    // setTimeout(()=>this.compteur$.subscribe(value=>console.log(value));
    
this.compteur$=interval(1000).pipe(
  map( value => value %2===0?
  ` je suis ${value} je suis pair`:
  ` je suis${value} je suis impair`
    )
);
this.compteur1$=interval(1000).pipe(
  map(value => value*10)
)

this.compteur2$=interval(1000).pipe(
  filter(value => value %3 ===0),
    map(value => value %2===0?
      this.etat = true: this.etat=false
 ),
 tap(moy => this.resultat(moy)) 
 );

    

// this.compteur1$=interval(1000).pipe( 
//   map(value=> value >=5?
    
//     this.etat=true :
    
//     this.etat=false 

//   ))

    
  
  
    

  

}
resultat(text:boolean){
  console.log('log:',text)
  
}
}
