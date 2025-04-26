import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private baseUrl="http://localhost:8080/api/qna/ask";

  constructor(private httpClient:HttpClient) { }

  askQuestion(question:string):Observable<any>{
    return this.httpClient.post<any>(this.baseUrl,{question});
  }
}
