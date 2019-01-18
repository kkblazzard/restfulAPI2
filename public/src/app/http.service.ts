import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { 
  }

getTasks(){
  return this._http.get('/tasks');
  
}
getATask(id){
  console.log(id);
  return this._http.get(`/tasks/${id}`);
}
deleteATask(id){
  return this._http.delete('/tasks/'+id);
}
addTask(newTask){
  return this._http.post('/tasks',newTask);
}
updateTask(id,TaskToUpdate){
  console.log("in http.service.update", TaskToUpdate);
  return this._http.put('/tasks/'+id,TaskToUpdate);
}
}