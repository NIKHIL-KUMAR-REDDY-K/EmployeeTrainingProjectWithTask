import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {
  TrackerDetails="https://localhost:44304/api/Tracker/getparticulardata";
  url="https://localhost:44304/api/Tracker";

  constructor(private http: HttpClient) { }

  GetParticularTrackerDetails(id:any,name:any){
    return this.http.get(`${this.TrackerDetails}/${id}/${name}`);
  }
  updateTrackerStatus(data:any){
    return this.http.put(this.url,data)
  }
}
