import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

constructor(private service:DataService){}

enbl:boolean=true;
enbl2:boolean=true;
data:any;
saved:any;
saved2:any;

ngOnInit(){

  this.service.get().subscribe((result)=>{
    this.data=result;
  })
}

edit1(a:any){
this.enbl=false;
}

save1(a:any){

  this.saved={
    name:a.name,
    city:a.city,
    age:a.age
  }

  this.service.update(this.saved);


  this.enbl=true;
}

edit2(b:any){
  this.enbl2=false;
}

save2(b:any){

  this.saved2={
    name:b.name
  }

  this.service.update(this.saved2);
  this.enbl2=true;
}

delete(a:any){
  this.service.delete(a);
}


delete2(a:any){
  this.service.delete(a);
}
}
