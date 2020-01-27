import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FormConfigService {

  public formConfigAPI: string = environment.apiUrl + environment.demandeTypeEndpoint;
  public listeFormsAPI: string = environment.apiUrl + environment.listeFormsEndPoint;
  public listeticketsAPI: string = environment.apiUrl + environment.listeTicketsEndPoint;
  public listetypeForm = environment.apiUrl + environment.listeTypeForm;


  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data);

    });
  }

  public getJSON(): Observable<any> {
    return this.http.get<any>(this.formConfigAPI + '3');
  }

  public getJSONbyRef(ref: string): Observable<any> {
    return this.http.get<any>(this.formConfigAPI + ref);
  }

  public  getJSONListForm(): Observable<any> {
    return this.http.get<any>(this.listeFormsAPI);
  }

  public  getJSONListTicket(): Observable<any> {
    return this.http.get<any>(this.listeticketsAPI);
  }

  public  getJSONListeTypeForm(): Observable<any> {
    return this.http.get<any>(this.listetypeForm);
  }
}