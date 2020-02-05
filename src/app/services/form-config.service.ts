import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { environment } from 'src/environments/environment';
import { FormConfig } from '../models/formConfig.model';


@Injectable({
  providedIn: 'root'
})
export class FormConfigService {

  // Appels API
  private formConfigAPI: string = environment.apiUrl + environment.demandeTypeEndpoint;
  private listeFormsAPI: string = environment.apiUrl + environment.listeFormsEndPoint;
  private listeticketsAPI: string = environment.apiUrl + environment.ticketEndPoint + environment.listeTickets;
  private listetypeForm = environment.apiUrl + environment.demandeTypeEndpoint + environment.listeTypeForm;
  // formulaire courant
  private currentForm: FormConfig;
  currentFormSubject = new Subject<FormConfig>();
  private formList: FormConfig[];
  formListSubject = new Subject<FormConfig[]>();

  constructor(private http: HttpClient) {}

   emitCurrentFormSubject() {
    this.currentFormSubject.next(this.currentForm);
  }

   emitFormListSubject() {
    this.formListSubject.next(this.formList.slice());
  }

  /**
   * Charge un formulaire à partir de sa référence
   * @param ref : id, référence du formulaire
   */
  public getJSONbyRef(ref: string) {
    return this.http.get<any>(this.formConfigAPI + ref);
  }

  /**
   * Charge l'ensemble des formulaires 
   */
  public getJSONListForm(): Observable<any> {
    return this.http.get<any>(this.listeFormsAPI);
  }

  /**
   * Charge la liste des tickets en cours
   */
  public getJSONListTicket(): Observable<any> {
    return this.http.get<any>(this.listeticketsAPI);
  }

  /**
   * Charge les différents types de formulaires existants
   */
  public getJSONListeTypeForm(): Observable<any> {
    console.log(this.listetypeForm);
    return this.http.get<any>(this.listetypeForm);
  }
}