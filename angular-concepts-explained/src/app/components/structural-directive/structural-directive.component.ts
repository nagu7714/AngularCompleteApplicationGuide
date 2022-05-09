import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent{
 
  //users:string[] = ["User1", "User2" , "User3"];

  users:any[]=[
    {id:101 ,name:'nagaraj',dep:'IT'},
    {id:102 ,name:'david',dep:'accounts'},
    {id:103 ,name:'chrish',dep:'admin'},
  ]

}
