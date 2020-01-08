import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class FormConfigurationService {

  constructor(private http: HttpClient) { 
    this.getJSON().subscribe(data => {
      console.log(data);
    });
  }

public getJSON(): Observable<any> {
  return this.http.get("../_files/test.json");
}

}
