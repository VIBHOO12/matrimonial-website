
// src/app/services/chat.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  rid: number | undefined;

  private baseUrl = 'http://localhost:8080/api/message'; // Update with your backend API URL

  constructor(private httpClient: HttpClient) {}

  addMessage(message: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}`, message);
  }

  getMessages(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}`);
  }


  // updateUser(messageId: Message): Observable<any> {
  //   return this.httpClient.put(`${this.baseUrl}/${messageId.messageId}`, Message);
  // }
  
  

  deleteMessage(msgId: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/${msgId}`);
  }
  
}

