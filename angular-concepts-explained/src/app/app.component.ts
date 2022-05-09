import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  selectedCountry:string='';
  isUserloggedIn:boolean=true;

  countries:any[]=[
    {code:'ind', name:'India'},
    {code:'usa', name:'America'},
    {code:'eng', name:'England'}
  ];

  ngOnInit(): void {
    console.log(this.countries);
  }

  choice(code: string){
    this.selectedCountry=code;

  }
 
  
}
