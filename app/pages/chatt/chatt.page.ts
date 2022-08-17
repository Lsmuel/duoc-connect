import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-chatt',
  templateUrl: './chatt.page.html',
  styleUrls: ['./chatt.page.scss'],
})
export class ChattPage implements OnInit {

  activeTabs: string = 'chats'

  constructor(private menuController: MenuController) { }

  segmentChange(e){
    this.activeTabs = e.target.value;
  }


  ngOnInit() {
  }

  mostrarMenu() {
    this.menuController.open('first');
  }

}
