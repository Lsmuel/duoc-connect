import { Component, OnInit } from '@angular/core';
import { MedicinaService } from 'src/app/services/medicina.service';
import { Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-medicina',
  templateUrl: './medicina.page.html',
  styleUrls: ['./medicina.page.scss'],
})
export class MedicinaPage implements OnInit {

  medicina: Article[] = [];

  constructor(private medicinaServices: MedicinaService) { }

  ngOnInit() {
    this.medicinaServices.getMetodoGod().subscribe(resp =>{
      console.log('medicina', resp)
      this.medicina.push(...resp.articles);
    })
  }

}
