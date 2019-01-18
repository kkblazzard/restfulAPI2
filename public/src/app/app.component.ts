import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { isNumber } from 'util';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
title='app';
tasks:any=[];
Atask:any;
newTask:any;

update:any;
  constructor(private _httpService: HttpService){}
ngOnInit(){
  this.newTask ={ title:"", description:"" }

}
CreateTaskInService(){
  let observable = this._httpService.addTask(this.newTask);
  observable.subscribe(data=>{
    console.log("Got data back from form",data);
    this.newTask = {title:"", description:""}
  })
}

updateTaskInService(id){
  console.log(this.updateTask);
  let observable = this._httpService.updateTask(id,this.Atask);
  observable.subscribe(data=>{
    console.log("Got data back from form",data);
    this.updateTask = {title:"", description:""}
})
} 
getTasksFromService(){
  let observable=this._httpService.getTasks();
  observable.subscribe(data =>{
    console.log("Got our task!", data);
    this.tasks=data;
  });
};
  getATaskFromService(id){
    let observable=this._httpService.getATask(id);
    observable.subscribe(data =>{
      console.log("Got A task!", data);
      this.Atask=data["task"];
      console.log("Atask",this.Atask)
    });
  };
  deleteATaskFromService(id){
    let observable=this._httpService.deleteATask(id);
    observable.subscribe(data =>{
      console.log("Got A task!", data);
      this.Atask=data;
    });
  };
  onButtonClick(): void{
    console.log("Click is working");
    this.getTasksFromService();
    
  };

onButtonClickId(id:any): void {
  this.getATaskFromService(id); 

  console.log(`Click event is working with ID: ${id}`);
};
onButtonClickUpdate(): void {
  
  this.update ="on";
  };

onButtonClickdelete(id:any): void {
  this.deleteATaskFromService(id);
  this.getTasksFromService()
  console.log('Click event is working with delete:'+id);
};
}
