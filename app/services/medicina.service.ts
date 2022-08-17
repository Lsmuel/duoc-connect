import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { RespuestaToHeadLines } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class MedicinaService {

  constructor(private http: HttpClient) { }

  getMetodoGod(){
    return this.http.get<RespuestaToHeadLines>
    ('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c7e1a4807cf64b65a6ace40f01f528f2');
  }
}
